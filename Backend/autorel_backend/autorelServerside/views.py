from django.shortcuts import render
from django.http import JsonResponse
from django.urls import get_resolver
from rest_framework import viewsets
from django.contrib.contenttypes.models import ContentType
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

class AreaViewSet(viewsets.ModelViewSet):
    queryset = models.area.objects.all()
    serializer_class = serializers.areaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    
class ReportViewSet(viewsets.ModelViewSet):
    queryset = models.report.objects.all()
    serializer_class = serializers.reportSerializer
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = models.comment.objects.all()
    serializer_class = serializers.commentSerializer
    
    def perform_create(self, serializer):
        content_type_model = self.request.data.get('content_type')
        object_id = self.request.data.get('object_id')
        content_type = ContentType.objects.get(model=content_type_model)
        serializer.save(content_type=content_type, object_id=object_id)
    
class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = models.attachment.objects.all()
    serializer_class = serializers.attachmentSerializer
    
    def perform_create(self, serializer):
        content_type_model = self.request.data.get('content_type')
        object_id = self.request.data.get('object_id')
        content_type = ContentType.objects.get(model=content_type_model)
        serializer.save(content_type=content_type, object_id=object_id)
    
class Report_historyViewSet(viewsets.ModelViewSet):
    queryset = models.report_history.objects.all()
    serializer_class = serializers.report_historySerializer

def test_settings(request):
    data = {
        'DEBUG': settings.DEBUG,
        'ALLOWED_HOSTS': settings.ALLOWED_HOSTS,
        'DATABASES': settings.DATABASES,
    }
    return JsonResponse(data)

# Create your views here.
