from django.db import models


class Item(models.Model):
	""" An item that a user can put on their tab """
	name 		= models.CharField(max_length=200)
	description = models.TextField(blank=True)

	def __str__(self):
		return self.name

class Entry(models.Model):
	""" An entry for a user adding someting to their tab """
	user 		= models.CharField(max_length=200)
	item 		= models.ForeignKey(Item, on_delete=models.PROTECT)
	timestamp  	= models.DateTimeField(auto_now_add=True)
	edited  	= models.DateTimeField(auto_now=True)
	archived 	= models.BooleanField(default=False)

	def datetime(self):
		return self.timestamp.strftime('%Y-%m-%d %H:%M')

	def __str__(self):
		return '%s, %s, %s'%(self.datetime(), self.user, self.item)
