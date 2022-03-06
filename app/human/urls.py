from django.urls import path

from . import views

h_controller = views.HumanController

urlpatterns = [
    path('number/<int:value>', h_controller.getNumber, name='human_numbers'),
    path('atmospheres/<int:value>',
         h_controller.getAtmospheres, name='human_atmos'),
    path('seconds/<int:value>', h_controller.getSeconds, name='human_seconds')
]
