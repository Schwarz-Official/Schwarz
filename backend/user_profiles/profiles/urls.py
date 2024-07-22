from django.urls import path
from .views import UserProfileView

urlpatterns = [
    path('user/<uuid:user_id>/', UserProfileView.as_view(), name='user-profile'),
]
