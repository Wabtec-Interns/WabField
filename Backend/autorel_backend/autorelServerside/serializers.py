from rest_framework import serializers
import autorelServerside.models as models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'
        
