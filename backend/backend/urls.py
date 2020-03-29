# urls.py
from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create-journal', CreateJournalView.as_view()),
    path('get-journals', GetJournalsView.as_view()),
    path('get-journal', getSingleJournal.as_view()),
    path('edit-journal', editJournal.as_view()),
    # *new
    path('delete-journal', deleteJournal.as_view())
]


