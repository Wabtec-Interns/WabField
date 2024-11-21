from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField(max_length=100, unique=True)
    user_password = models.CharField(max_length=50)
    user_role = models.CharField(max_length=50)
    def __str__(self):
        return self.user_name
    
class report(models.Model):
    report_id = models.AutoField(primary_key=True)
    report_title = models.CharField(max_length=100)
    report_description = models.TextField(editable=True)
    report_status = models.CharField(max_length=50)
    report_date = models.DateField()
    report_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.report_title
    
class comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    comment_text = models.TextField(editable=True)
    comment_date = models.DateField()
    comment_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_report = models.ForeignKey(report, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.comment_text
    
class attachment(models.Model):
    attachment_id = models.AutoField(primary_key=True)
    attachment_name = models.CharField(max_length=100)
    attachment_description = models.TextField(editable=True)
    attachment_date = models.DateField()
    attachment_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    attachment_report = models.ForeignKey(report, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.attachment_name
    
class report_history(models.Model):
    history_id = models.AutoField(primary_key=True)
    history_date = models.DateField()
    history_description = models.TextField(editable=True)
    history_report = models.ForeignKey(report, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.history_description
    
class report_area(models.Model):
    area_id = models.AutoField(primary_key=True)
    area_name = models.CharField(max_length=100)
    area_report = models.ForeignKey(report, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.area_name
    
    