from django.contrib import admin
from django.urls import path, include
from quark_be_app.views import home  # Import the home view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('quark_be_app.urls')),  # Include your app's URLs
    path('', home, name='home'),  # Add this line for the root URL
]