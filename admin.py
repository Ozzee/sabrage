from django.contrib import admin
from .models import Entry, Item, LineItem

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
	date_hierarchy = 'timestamp'
	list_display = ('timestamp', 'name')
	list_filter = ('archived',)

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
	list_display = ('name', 'description')

@admin.register(LineItem)
class LineItemAdmin(admin.ModelAdmin):
	list_display = ('entry', 'item', 'amount')
	readonly_fields = ('entry',)
