"""
URL configuration for autorel_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
import autorelServerside.views as views

router = routers.DefaultRouter()
router.register(r'areas', views.AreaViewSet),
router.register(r'users', views.UserViewSet),
router.register(r'reports', views.ReportViewSet),
router.register(r'comments', views.CommentViewSet),
router.register(r'attachments', views.AttachmentViewSet),
router.register(r'report_history', views.Report_historyViewSet),

urlpatterns = [
    path('', include(router.urls)),
    path('consulting/', views.index_view),
    path('admin/', admin.site.urls),
    path('test_settings/', views.test_settings),
]
