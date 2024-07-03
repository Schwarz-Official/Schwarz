from django.core.management.base import BaseCommand
from accounts.models import Module, Permission, Role


class Command(BaseCommand):
    help = 'Initialize RBAC system with modules, permissions, and roles'

    def handle(self, *args, **kwargs):
        self.create_modules()
        self.create_permissions()
        self.create_roles()
        self.stdout.write(self.style.SUCCESS('Successfully initialized RBAC system'))

    def create_modules(self):
        self.assets_module = Module.objects.get_or_create(name="Assets")[0]
        self.comments_module = Module.objects.get_or_create(name="Comments")[0]
        self.users_module = Module.objects.get_or_create(name="Users")[0]

    def create_permissions(self):
        self.create_assets = Permission.objects.get_or_create(name="Create", module=self.assets_module)[0]
        self.read_assets = Permission.objects.get_or_create(name="Read", module=self.assets_module)[0]
        self.update_assets = Permission.objects.get_or_create(name="Update", module=self.assets_module)[0]
        self.delete_assets = Permission.objects.get_or_create(name="Delete", module=self.assets_module)[0]

        self.read_comments = Permission.objects.get_or_create(name="Read", module=self.comments_module)[0]
        self.create_comments = Permission.objects.get_or_create(name="Create", module=self.comments_module)[0]

        self.read_users = Permission.objects.get_or_create(name="Read", module=self.users_module)[0]

    def create_roles(self):
        user_role = Role.objects.get_or_create(name="User")[0]
        user_role.permissions.add(self.read_assets, self.read_comments, self.create_comments)

        creator_role = Role.objects.get_or_create(name="Creator")[0]
        creator_role.permissions.add(self.create_assets, self.read_assets, self.update_assets, self.delete_assets,
                                     self.read_comments, self.create_comments)

        organization_role = Role.objects.get_or_create(name="Organization")[0]
        # Assign permissions based on special access features
