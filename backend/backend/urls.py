from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/", include("auth.urls")),
    # path('socialmedia/', include('socialmedia.urls')),  # Include socialmedia app URLs
]