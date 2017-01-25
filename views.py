import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Entry, Item
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models import Q

@require_http_methods(["GET"])
def index(request):
    return HttpResponse("Ok")

@require_http_methods(["GET", "POST"])
@csrf_exempt # TODO: Implement CSRF
def entries(request):
	""" Return all non-archived entries or add new entry"""
	if request.method == 'POST':
		return set_headers(add_entry(request))
	else:
		return set_headers(JsonResponse(list_entries()))		

def users(request):
	users = []
	q = request.GET['q']
	matches = User.objects.filter(Q(first_name__icontains = q) | Q(last_name__icontains = q))
	for user in matches:
		users.append(user.first_name + ' ' + user.last_name);

	return set_headers(JsonResponse({'users': users}))

def items(request):
	items = []
	for item in Item.objects.all():
		items.append(item.name)
	return set_headers(JsonResponse({'items': items}))

def list_entries():
	entries = []
	for entry in Entry.objects.filter(archived=False):
		entries.append({'timestamp': entry.timestamp.isoformat(), 'user': entry.user, 'item': entry.item.name})
	return {'count': Entry.objects.count(), 'entries': entries}


def add_entry(request):
	entry = json.loads(request.body.decode('utf-8'))
	item = Item.objects.get(name=entry['item'])
	e = Entry(user=entry['user'], item=item)
	e.save()

	return JsonResponse(entry)

def set_headers(response):
	if settings.DEBUG:
			response['Access-Control-Allow-Origin'] = 'http://localhost:3000'
			response['Access-Control-Allow-Credentials'] = 'true'
	return response

