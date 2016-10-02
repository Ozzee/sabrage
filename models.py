from django.db import models


class Item(models.Model):
	""" An item that a user can put on their tab """
	name = models.CharField(max_length=200)
	description = models.TextField(blank=True)

	def __str__(self):
		return self.name

class Entry(models.Model):
	""" An entry for a user adding someting to their tab """
	name = models.CharField(max_length=200)
	timestamp  = models.DateTimeField(auto_now_add=True)
	archived = models.BooleanField(default=False)

	def datetime(self):
		return self.timestamp.strftime('%Y-%m-%d %H:%M')

	def __str__(self):
		return '%s, %s'%(self.datetime(), self.name)

class LineItem(models.Model):
	""" Line item to enable one entry to have multiple items """
	amount = models.PositiveSmallIntegerField()
	item = models.ForeignKey(Item, on_delete=models.PROTECT)
	entry = models.ForeignKey(Entry, on_delete=models.CASCADE, editable=False)

	def __str__(self):
		return '%s x%d'%(self.item.name, self.amount)
