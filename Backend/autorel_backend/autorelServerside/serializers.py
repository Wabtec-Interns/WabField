from rest_framework import serializers
import autorelServerside.models as models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'
        
class reportSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.report
        fields = '__all__'
        
class commentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.comment
        fields = '__all__'
        
class attachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.attachment
        fields = '__all__'
        
class report_historySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.report_history
        fields = '__all__'
        
class report_areaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.report_area
        fields = '__all__'
        
