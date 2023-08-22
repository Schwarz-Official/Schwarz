class AppRouter:
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'mongodb_app':
            return 'mongodb'
        elif model._meta.app_label == 'redshift_app':
            return 'redshift'
        return 'default'

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'mongodb_app':
            return 'mongodb'
        elif model._meta.app_label == 'redshift_app':
            return 'redshift'
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == 'mongodb_app':
            return db == 'mongodb'
        elif app_label == 'redshift_app':
            return db == 'redshift'
        return db == 'default'