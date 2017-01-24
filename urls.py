from django.conf.urls import url
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html"), name='index'),
    url(r'^entries/$', views.entries, name='entries'),
    url(r'^users/$', views.users, name='users'),
    url(r'^items/$', views.items, name='items')
]
