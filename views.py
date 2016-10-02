import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Entry, Item

@require_http_methods(["GET"])
def index(request):
    return HttpResponse("Ok")

@require_http_methods(["GET", "POST"])
@csrf_exempt # TODO: Implement CSRF
def entries(request):
	""" Return all non-archived entries or add new entry"""
	if request.method == 'POST':
		return add_entry(request)
	else:
		return JsonResponse(list_entries())


def list_entries():
	entries = []
	for entry in Entry.objects.filter(archived=False):
		entries.append({'timestamp': entry.timestamp, 'user': entry.user, 'item': entry.item.name})
	return {'count': Entry.objects.count(), 'entries': entries}


def add_entry(request):
	entry = json.loads(request.body.decode('utf-8'))
	item = Item.objects.get(name=entry['item'])
	e = Entry(user=entry['user'], item=item)
	e.save()

	return JsonResponse(entry)
