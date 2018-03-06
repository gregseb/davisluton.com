from django.urls import include, path
from rest_framework import routers

from project.davisluton import views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

app_name = 'davisluton'
urlpatterns = [
    path('', include(
        (router.urls, "api")
    )),
]
