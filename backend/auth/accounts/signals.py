from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Role, User, UserRole


@receiver(post_save, sender=User)
def assign_default_role(sender, instance, created, **kwargs):
    if created:
        user_role = Role.objects.get(name="User")
        UserRole.objects.create(user=instance, role=user_role)
