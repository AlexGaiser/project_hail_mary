from django.urls import path

from . import views

urlpatterns = [
    path('numbers/<str:value>', views.ConverterController.getNumber, name='eridian')
]
