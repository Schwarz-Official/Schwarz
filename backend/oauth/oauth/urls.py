# urls.py in the oauth_service project

from django.urls import path
from allauth.socialaccount import views as socialaccount_views

urlpatterns = [
    # Include OAuth URLs
    path('accounts/', socialaccount_views.connections, name='socialaccount_connections'),
    path('login/', socialaccount_views.login, name='account_login'),
    path('logout/', socialaccount_views.logout, name='account_logout'),
    path('signup/', socialaccount_views.signup, name='account_signup'),
    path('disconnect/<int:account_id>/', socialaccount_views.disconnect, name='socialaccount_disconnect'),
]
