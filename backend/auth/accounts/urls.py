from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserPreferencesViewSet

router = DefaultRouter()
router.register(r'preferences', UserPreferencesViewSet, basename='userpreferences')

urlpatterns = [
    path('', include(router.urls)),
]
