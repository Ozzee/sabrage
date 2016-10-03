# sabrage

Django module for letting users keep a tab. This can be used to allow, for example, members of a club to have a common beerfridge.

Administration is done through the Django admin interface. There are two models:

### Entry
This model represents an enty to the tab. 

* Has a user and an item.
* The user is a text field in order to allow for more flexibility. E.g. running the page on a tablet without login.
* A timestamp of when the entry was made is automatically added.
* An entry may be archived once a user has settled their debt.

### Item
This model represents an item that you can put on your tab. E.g. a coke or bag of chips etc.

* Has a name and a description.

## Installation

**Requirements**
* Python 3
* Django 1.10

This app can be installed by cloning the repository in a Django project folder and adding it to the `INSTALLED_APPS`.

```
# In the project folder
git clone git@github.com:Ozzee/sabrage.git
```

```python
INSTALLED_APPS = [
    ...,
    'sabrage'
]
```
