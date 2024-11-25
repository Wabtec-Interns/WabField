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
        
class reportSerializer(serializers.ModelSerializer):
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
        
