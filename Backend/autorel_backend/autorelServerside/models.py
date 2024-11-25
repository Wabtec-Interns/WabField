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
    
class report(models.Model):
    REPORT_STATUS_CHOICES = [
        ('Open', 'Aberto'),
        ('Closed', 'Fechado'),
        ('In Progress', 'Em Andamento'),
    ]
    report_id = models.AutoField(primary_key=True)
    report_title = models.CharField(max_length=100)
    report_description = models.TextField(editable=True)
    report_status = models.CharField(max_length=50, choices=REPORT_STATUS_CHOICES, default='Open')
    report_date = models.DateField()
    report_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
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
    
    