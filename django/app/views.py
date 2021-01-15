from rest_framework.response import Response
from rest_framework.views import APIView
from .models import City, EventType
from .serializers import CitySerializer, EventTypeSerializer

class CityView(APIView):
    def get(self, request):
        serializer = CitySerializer(City.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        name = request.data.get('name')
        # Create an city from the above data
        serializer = CitySerializer(data={'name': name})
        if serializer.is_valid(raise_exception=True):
            city = serializer.save()
        return Response({"success": "City '{}' created successfully".format(city.name)})

class EventTypeView(APIView):
    def get(self, request):
        serializer = EventTypeSerializer(EventType.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        name = request.data.get('name')
        # Create an city from the above data
        serializer = EventTypeSerializer(data={'name': name})
        if serializer.is_valid(raise_exception=True):
            city = serializer.save()
        return Response({"success": "EventType '{}' created successfully".format(city.name)})
