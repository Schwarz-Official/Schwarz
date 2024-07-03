from django.shortcuts import render
from rest_framework import viewsets
from .models import UserPreferences
from .serializers import UserPreferencesSerializer
from rest_framework.permissions import IsAuthenticated


class UserPreferencesViewSet(viewsets.ModelViewSet):
    serializer_class = UserPreferencesSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserPreferences.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
