from django.contrib import admin
from .models import Entry, Item

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
	date_hierarchy = 'timestamp'
	list_display = ('timestamp', 'user', 'item')
	list_filter = ('archived',)

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
	list_display = ('name', 'description')
