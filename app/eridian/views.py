from converters.converters import Converter
from django.http import HttpResponse
from django.shortcuts import render
import sys


# Create your views here.
converter = Converter.build('eridian')


def index(request, value=''):
    return HttpResponse(converter.integer(value))
