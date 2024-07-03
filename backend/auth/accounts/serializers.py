from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from accounts.models import UserPreferences

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
                  'email',
                  'first_name',
                  'last_name',
                  'date_of_birth',
                  'gender',
                  'address',
                  'preferred_lang',
                  'company',
                  'job_title',
                  'industry',
                  'experience',
                  'password',
                  )


class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ['dark_mode']
