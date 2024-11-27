from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

# Create your models here.
class User(models.Model):
    USER_TYPE_CHOICES = [
        ('Internal', 'Interno'),
        ('External', 'Externo'),
    ]
    INTERNAL_TYPE_CHOICES = [
        ('Admin', 'Admin'),
        ('Supervisor', 'Supervisor'),
        ('Employee', 'Funcionário'),
    ]
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField(max_length=100, unique=True)
    user_password = models.CharField(max_length=50)
    user_role = models.CharField(max_length=50)
    user_area = models.ForeignKey('area', on_delete=models.CASCADE, null=True, blank=True)
    user_type = models.CharField(max_length=50, choices=USER_TYPE_CHOICES, default='Internal')
    internal_type_user = models.CharField(max_length=50, choices=INTERNAL_TYPE_CHOICES, null=True, blank=True)
    
    def __str__(self):
        return self.user_name
    
# encapsula reports
class survey(models.Model):
    survey_id = models.AutoField(primary_key=True)
    survey_title = models.CharField(max_length=100)
    survey_location = models.CharField(max_length=100)
    survey_description = models.TextField(editable=True)
    survey_start_date = models.DateField()
    survey_end_date = models.DateField()
    survey_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
class LaborType(models.Model):
    labor_type_id = models.AutoField(primary_key=True)
    LABOR_CHOICES = [
        ('direct worker', 'Mão de Obra Direta'),
        ('indirect worker', 'Mão de Obra Indireta'),
        ('third party', 'Terceirizado'),
    ]
    
    DIRECT_WORKER_SUBTYPES = [
        ('mechanic', 'Mecânico'),
        ('electrician', 'Eletricista'),
        ('painter', 'Pintor'),
        ('carpenter', 'Carpinteiro'),
        ('plumber', 'Encanador'),
        ('welder', 'Soldador'),
        ('bricklayer', 'Pedreiro'),
        ('helper', 'Ajudante'),
        ('installer', 'Instalador'),
        ('foreman', 'Mestre de Obras'),
        ('plasterer', 'Gesseiro'),
        ('laborer', 'Servente'),
        ('other', 'Outro'),
    ]
    
    INDIRECT_WORKER_SUBTYPES = [
        ('engineer', 'Engenheiro'),
        ('technician', 'Técnico'),
        ('supervisor', 'Supervisor'),
        ('inspector', 'Inspetor'),
        ('safety technician', 'Técnico de Segurança'),
        ('architect', 'Arquiteto'),
        ('designer', 'Designer'),
        ('intern', 'Estagiário'),
        ('building_technician', 'Técnico de Construção'),
        ('other', 'Outro'),
    ]
    
    labor_type = models.CharField(max_length=50, choices=LABOR_CHOICES, default='direct worker')
    labor_subtype = models.CharField(max_length=50, choices=DIRECT_WORKER_SUBTYPES + INDIRECT_WORKER_SUBTYPES, null=True, blank=True)
    quantity = models.PositiveIntegerField()
    
    def __str__(self):
        return f"{self.get_labor_type_display()} - {self.quantity}"
    
    def get_labor_subtype_display(self):
       if self.labor_type == 'direct worker':
           return dict(self.DIRECT_WORKER_SUBTYPES).get(self.labor_subtype, self.labor_subtype)
       elif self.labor_type == 'indirect worker':
           return dict(self.INDIRECT_WORKER_SUBTYPES).get(self.labor_subtype, self.labor_subtype)
       return self.labor_subtype
    
    
class report_activities(models.Model):
    STAGE_CHOICES = [
        ('Infra', 'Etapa de Infraestrutura'),
        ('Installation', 'Etapa de Instalação'),
        ('Final', 'Etapa de Entrega Final'),
    ]
    
    INFRA_SUBSTAGE_CHOICES = [
         ('Soil Survey', 'Sondagem do Terreno'),
        ('Trenching and Duct Laying', 'Execução de Valetamento com Lançamento de Dutos'),
        ('Installation of 600mm Passage Boxes', 'Instalação das Caixas de Passagem de 600mm'),
        ('Crossing Execution', 'Execução de Travessia'),
    ]
    
    INSTALLATION_SUBSTAGE_CHOICES = [
        ('Cable Laying', 'Lançamento dos Cabos'),
        ('Signal Installation', 'Instalação de Sinais'),
        ('MCH Installation', 'Instalação de MCH'),
        ('MCH Cable Connection', 'Ligação nos Cabos da MCH'),
        ('Parapet Painting', 'Pintura no Parapet'),
    ]
    
    FINAL_SUBSTAGE_CHOICES = [
        ('Technical Delivery', 'Entrega Técnica'),
        ('Cleaning and Organization', 'Limpeza e Organização do Local'),
    ]
    
    report_model = models.ForeignKey('Report', on_delete=models.CASCADE, related_name='activities')
    stage = models.CharField(max_length=50, choices=STAGE_CHOICES, default='Infra')
    sub_stage = models.CharField(max_length=50, choices=INFRA_SUBSTAGE_CHOICES + INSTALLATION_SUBSTAGE_CHOICES + FINAL_SUBSTAGE_CHOICES, null=True, blank=True)
    planned_completion_task = models.CharField(max_length=10, default='100%')
    actual_completion_task = models.CharField(max_length=10, blank=True, null=True)
    accumulated = models.CharField(max_length=10, blank=True, null=True)
    start_time = models.TimeField()
    end_time = models.TimeField()
    total_hours = models.CharField(max_length=10, blank=True, null=True)
    
    def save(self, *args, **kwargs):
        # Calcula a porcentagem de conclusão da tarefa  
        if self.actual_completion_task:
            try:
                done_percentage = float(self.actual_completion_task.strip('%'))
                self.accumulated = f"{done_percentage}%"
            except ValueError:
                self.accumulated = self.actual_completion_task
                
        if self.start_time and self.end_time:
            
    
class report(models.Model):
    REPORT_STATUS_CHOICES = [
        ('Open', 'Aberto'),
        ('Closed', 'Fechado'),
        ('In Progress', 'Em Andamento'),
    ]
    
    WEATHER_CONDITION_CHOICES = [
        ('Sunny', 'Ensolarado'),
        ('Cloudy', 'Nublado'),
        ('Rainy', 'Chuvoso'),
        ('Foggy', 'Nebuloso'),
        ('Stormy', 'Tempestuoso'),
    ]
    
    WORK_CONDITION_CHOICES = [
        ('Practicable', 'Praticável'),
        ('Partially Practicable', 'Parcialmente Praticável'),
        ('Unpracticable', 'Impraticável'),
    ]
    
    report_id = models.AutoField(primary_key=True)
    report_title = models.CharField(max_length=100)
    report_description = models.TextField(editable=True)
    
    report_work_hours_start = models.TimeField()
    report_work_hours_end = models.TimeField()
    report_interval_hours_start = models.TimeField()
    report_interval_hours_end = models.TimeField()
    
    report_status = models.CharField(max_length=50, choices=REPORT_STATUS_CHOICES, default='Open')
    report_date = models.DateField()
    report_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    belong_survey = models.ForeignKey(survey, on_delete=models.CASCADE, related_name='reports', null=True, blank=True)
    
    morning_weather = models.CharField(max_length=50, choices=WEATHER_CONDITION_CHOICES, default='Sunny')
    afternoon_weather = models.CharField(max_length=50, choices=WEATHER_CONDITION_CHOICES, default='Sunny')
    night_weather = models.CharField(max_length=50, choices=WEATHER_CONDITION_CHOICES, default='Sunny')
    
    morning_work_condition = models.CharField(max_length=50, choices=WORK_CONDITION_CHOICES, default='Practicable')
    afternoon_work_condition = models.CharField(max_length=50, choices=WORK_CONDITION_CHOICES, default='Practicable')
    night_work_condition = models.CharField(max_length=50, choices=WORK_CONDITION_CHOICES, default='Practicable')
    
    labor_type = models.ManyToManyField(LaborType, related_name='reports', null=True, blank=True)
    
    def __str__(self):
        return self.report_title

    
class checklist_report (models.Model):
    checklist_id = models.AutoField(primary_key=True)
    checklist_name = models.CharField(max_length=100)
    checklist_description = models.TextField(editable=True)
    checklist_date = models.DateField()
    checklist_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    checklist_observation = models.TextField(editable=True)
    
class comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    comment_text = models.TextField(editable=True)
    comment_date = models.DateField()
    comment_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.PositiveIntegerField(null=True, blank=True)
    content_object = GenericForeignKey('content_type', 'object_id')
        
    def __str__(self):
        return self.comment_text
    
class attachment(models.Model):
    attachment_id = models.AutoField(primary_key=True)
    attachment_name = models.CharField(max_length=100)
    attachment_description = models.TextField(editable=True)
    attachment_date = models.DateField()
    attachment_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.PositiveIntegerField(null=True, blank=True)
    content_object = GenericForeignKey('content_type', 'object_id')
    
    def __str__(self):
        return self.attachment_name
    
# encapsula reports e checklist reports para obter o historico
class report_history(models.Model):
    history_id = models.AutoField(primary_key=True)
    history_date = models.DateField()
    history_owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.PositiveIntegerField(null=True, blank=True)
    content_object = GenericForeignKey('content_type', 'object_id')
    
    def __str__(self):
        return self.history_description
    
class area(models.Model):
    area_id = models.AutoField(primary_key=True)
    AREA_NAME = [
        ('implantation', 'Implantação'),
        ('EHS', 'EHS'),
        ('engineering', 'Engenharia'),
        ('Subdiv', 'Subdiv'),
        ('N/A', 'N/A'),
    ]
    area_name = models.CharField(max_length=50, choices=AREA_NAME, default='N/A')
    
    def __str__(self):
        return self.area_name
    
    