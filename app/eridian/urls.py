from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:value>', views.index, name='eridian')
]
