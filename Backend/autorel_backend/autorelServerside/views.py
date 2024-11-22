from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings

def test_settings(request):
    data = {
        'DEBUG': settings.DEBUG,
        'ALLOWED_HOSTS': settings.ALLOWED_HOSTS,
        'DATABASES': settings.DATABASES,
    }
    return JsonResponse(data)

# Create your views here.
