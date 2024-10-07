from django.urls import path
from .views import ItemList  # Import the view you created in views.py
from .views import ItemList, home  # Import the new home view

urlpatterns = [
    path('', home, name='home'),  # Root URL route
    path('items/', ItemList.as_view(), name='item-list'),  # API route for items
    path('items/', ItemList.as_view(), name='item-list'),  # Define the URL route
]
