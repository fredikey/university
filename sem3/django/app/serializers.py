from rest_framework import serializers
from .models import City, EventType

class CitySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    def create(self, validated_data):
        print(validated_data)
        data = City.objects.create(**validated_data)
        print(data)
        return data

class EventTypeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    def create(self, validated_data):
        print(validated_data)
        data = EventType.objects.create(**validated_data)
        print(data)
        return data
