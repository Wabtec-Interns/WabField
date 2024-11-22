from django.shortcuts import render
from django.http import JsonResponse
from django.urls import get_resolver
from rest_framework import viewsets
import autorelServerside.models as models
import autorelServerside.serializers as serializers
from django.conf import settings

def get_routes():
    resolver = get_resolver()
    patterns = resolver.url_patterns

    def traverse(patterns, prefix='', visited=None):
        if visited is None:
            visited = set()
        routes = []
        for pattern in patterns:
            route_pattern = prefix + str(pattern.pattern)
            if route_pattern in visited:
                continue  # Evita ciclos
            visited.add(route_pattern)
            route = {
                'pattern': route_pattern,
                'children': []
            }
            if hasattr(pattern, 'url_patterns'):
                # É um include; percorre recursivamente
                route['children'] = traverse(pattern.url_patterns, route_pattern, visited)
            routes.append(route)
        return routes

    return traverse(patterns)

def index_view(request):
    routes = get_routes()
    return render(request, 'index.html', {'routes': routes})

class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    
class ReportViewSet(viewsets.ModelViewSet):
    queryset = models.report.objects.all()
    serializer_class = serializers.reportSerializer
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = models.comment.objects.all()
    serializer_class = serializers.commentSerializer
    
class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = models.attachment.objects.all()
    serializer_class = serializers.attachmentSerializer
    
class Report_historyViewSet(viewsets.ModelViewSet):
    queryset = models.report_history.objects.all()
    serializer_class = serializers.report_historySerializer
    
class Report_areaViewSet(viewsets.ModelViewSet):
    queryset = models.report_area.objects.all()
    serializer_class = serializers.report_areaSerializer

def test_settings(request):
    data = {
        'DEBUG': settings.DEBUG,
        'ALLOWED_HOSTS': settings.ALLOWED_HOSTS,
        'DATABASES': settings.DATABASES,
    }
    return JsonResponse(data)

# Create your views here.
