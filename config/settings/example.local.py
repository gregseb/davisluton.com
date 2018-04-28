from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY', default='*1hvq1ebcfy2w(bj@efvv-gu@*i^%k-=73@1mrqxys1mru&gyt')
DEBUG = env.bool('DJANGO_DEBUG', default=True)

# Edit this to contain only the hostnames you want to be able to access this site.
ALLOWED_HOSTS = ['127.0.0.1', 'db', 'web', 'nginx']

# An unsafe middleware for if you have cors issues in development.
# MIDDLEWARE.append('project.davisluton.middleware.dev_cors_middleware')

# Database settings for connecting to the docker postgres image.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
