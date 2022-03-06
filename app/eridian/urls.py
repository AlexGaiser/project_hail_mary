from django.urls import path
from . import views

e_controller = views.EridianController

urlpatterns = [
    path('number/<str:value>', e_controller.getNumber, name='eridian_numbers'),
    path('atmospheres/<int:value>',
         e_controller.getAtmospheres, name='eridian_atmos'),
    path('seconds/<str:value>', e_controller.getSeconds, name='eridian_seconds'),
]
