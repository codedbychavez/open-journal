# models.py
from django.db import models

# Create your models here.

class Journal(models.Model): # *new
    name = models.CharField(max_length=1024) # *new
    description = models.CharField(max_length=2048) # *new
    content = models.CharField(max_length=50000) # *new

    def __str__(self): # *new
        return self.name # *new
    
