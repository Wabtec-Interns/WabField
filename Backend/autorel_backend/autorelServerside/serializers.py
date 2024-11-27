from rest_framework import serializers
from django.contrib.contenttypes.models import ContentType
import autorelServerside.models as models

class areaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.area
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'
        
class laborTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LaborType
        fields = '__all__'

class reportActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ReportActivities
        fields = '__all__'

class checklistReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.checklist_report
        fields = '__all__'
        
class reportSerializer(serializers.ModelSerializer):
    labor_type = laborTypeSerializer(many=True, read_only=True)
    activities = reportActivitiesSerializer(many=True, read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, queryset=models.comment.objects.all())
    attachments = serializers.PrimaryKeyRelatedField(many=True, queryset=models.attachment.objects.all())
    
    class Meta:
        model = models.report
        fields = '__all__'
        
class ContentTypeField(serializers.Field):
    def to_representation(self, value):
        return value.model

    def to_internal_value(self, data):
        try:
            return ContentType.objects.get(model=data)
        except ContentType.DoesNotExist:
            raise serializers.ValidationError(f"Content type '{data}' does not exist.")
        
class commentSerializer(serializers.ModelSerializer):
    content_type = ContentTypeField()
    class Meta:
        model = models.comment
        fields = '__all__'
        
class attachmentSerializer(serializers.ModelSerializer):
    content_type = ContentTypeField()
    class Meta:
        model = models.attachment
        fields = '__all__'
        
class report_historySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.report_history
        fields = '__all__'
        
