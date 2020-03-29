# admin.py
from django.contrib import admin
from .models import Journal # *new

# Register your models here.
admin.site.register(Journal) # *new
