from django.urls import path

from . import views

urlpatterns = [
    path('numbers/<int:value>', views.HumanController.getNumber, name='numbers')
]
