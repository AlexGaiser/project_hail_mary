
from django.http import HttpResponse, JsonResponse
from converters.converters import IConverter
from converters.converters import Converter


class ConverterController:
    def __init__(self, converter: IConverter):
        self.converter: IConverter = converter

    def getNumber(self, request, value=''):
        return self.sendResponse(self.converter.integer(value))

    def getAtmospheres(self, request, value):
        return self.sendResponse(self.converter.atmospheres(value))

    def getSeconds(self, request, value):
        return self.sendResponse(self.converter.seconds(value))

    def sendResponse(self, value):
        return JsonResponse({'value': value, 'output': self.converter.outputType, 'origin': self.converter.type})
