DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'dbuser',
        'PASSWORD': 'dbpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    },
    'mongodb': {
        'ENGINE': 'djongo',
        'NAME': 'mongodb',
    },
    # Placeholder for Amazon Redshift
    'redshift': {
        # Configure Redshift connection parameters here
    },
}

DATABASE_ROUTERS = ['your_app_name.routers.database_router.AppRouter']