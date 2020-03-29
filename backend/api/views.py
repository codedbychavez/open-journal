# views.py
from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.views import APIView 
from rest_framework import status 
from .serializers import JournalSerializer 
from .models import Journal

# Create your views here.
class CreateJournalView(APIView): 
    def post(self, request): 
        journal_serializer = JournalSerializer(data=request.data)
        if journal_serializer.is_valid():
            journal_serializer.save()
            return Response(journal_serializer.data, status=status.HTTP_200_OK)

class GetJournalsView(APIView):
    def get(self, request):
        journals = Journal.objects.order_by('-id') 
        journal_serializer = JournalSerializer(journals, many=True)
        return Response(journal_serializer.data, status=status.HTTP_200_OK)

class getSingleJournal(APIView):
    def post(self, request):
        journal_id = request.data
        journal = Journal.objects.get(id=journal_id)
        journal_serialaizer = JournalSerializer(journal, many=False)
        return Response(journal_serialaizer.data, status=status.HTTP_200_OK)

class editJournal(APIView):
    def post(self, request):
        journal_id = request.data['id']
        journal_instance = Journal.objects.get(id=journal_id)
        journal_serializer = JournalSerializer(journal_instance, data=request.data)
        if journal_serializer.is_valid():
            journal_serializer.save()
            return Response(journal_serializer.data, status=status.HTTP_200_OK)

# *new
class deleteJournal(APIView):
    def post(self, request):
        journal_id = request.data
        journal = Journal.objects.get(id=journal_id)
        journal_serializer = JournalSerializer(journal, many=False)
        journal.delete()
        return Response(journal_serializer.data, status=status.HTTP_200_OK)            