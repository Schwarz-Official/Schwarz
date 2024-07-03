from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('djoser.urls')),
    path('api/', include('djoser.urls.jwt')),
    path('api/', include('djoser.social.urls')),
    path('api/', include('accounts.urls')),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
