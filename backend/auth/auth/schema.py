import graphene
import graphql_jwt
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from accounts.models import UserPreferences
from django.contrib.auth import get_user_model
from django.utils import timezone
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_jwt.decorators import login_required

from auth import settings

User = get_user_model()


# Relay Node for User
class UserNode(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (relay.Node,)
        filter_fields = ["email", "first_name", "last_name"]


# Relay Node for User Preferences
class UserPreferencesNode(DjangoObjectType):
    class Meta:
        model = UserPreferences
        interfaces = (relay.Node,)


# Create User Mutation
class CreateUser(relay.ClientIDMutation):
    user = graphene.Field(UserNode)

    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        date_of_birth = graphene.Date(required=True)
        gender = graphene.String(required=True)
        address = graphene.String(required=True)
        preferred_lang = graphene.String(required=True)
        company = graphene.String(required=True)
        job_title = graphene.String(required=True)
        industry = graphene.String(required=True)
        experience = graphene.Int(required=True)

    def mutate_and_get_payload(
        self,
        info,
        email,
        password,
        first_name,
        last_name,
        date_of_birth,
        gender,
        address,
        preferred_lang,
        company,
        job_title,
        industry,
        experience,
    ):
        user = get_user_model()(
            email=email,
            first_name=first_name,
            last_name=last_name,
            date_of_birth=date_of_birth,
            gender=gender,
            address=address,
            preferred_lang=preferred_lang,
            company=company,
            job_title=job_title,
            industry=industry,
            experience=experience,
        )
        user.set_password(password)
        user.save()

        return CreateUser(user=user)


# Update User Preferences Mutation
class UpdatePreferences(relay.ClientIDMutation):
    preferences = graphene.Field(UserPreferencesNode)

    class Input:
        dark_mode = graphene.Boolean(required=True)

    @login_required
    def mutate_and_get_payload(self, info, dark_mode):
        user = info.context.user
        preferences, created = UserPreferences.objects.get_or_create(user=user)
        preferences.dark_mode = dark_mode
        preferences.save()

        return UpdatePreferences(preferences=preferences)


class ObtainJSONWebToken(graphql_jwt.relay.JSONWebTokenMutation):
    user = graphene.Field(UserNode)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        user = info.context.user
        user.last_login = timezone.now()
        user.save(update_fields=["last_login"])
        return cls(user=user)


class RequestPasswordReset(relay.ClientIDMutation):
    class Input:
        email = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, root, info, email):
        try:
            user = User.objects.get(email=email)

            # Generate password reset token
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Create reset link (frontend URL)
            reset_url = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}"

            # Render email template
            context = {
                'user': user,
                'reset_url': reset_url,
                'site_name': settings.SITE_NAME
            }
            email_body = render_to_string('password_reset_email.html', context)

            # Send email
            send_mail(
                subject='Password Reset Request',
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                html_message=email_body,
            )

            return cls(success=True, errors=None)

        except User.DoesNotExist:
            # Return success even if user doesn't exist (security best practice)
            return cls(success=True, errors=None)
        except Exception as e:
            return cls(success=False, errors=[str(e)])

class ValidatePasswordResetToken(relay.ClientIDMutation):
    class Input:
        token = graphene.String(required=True)
        uidb64 = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, root, info, token, uidb64):
        try:
            # Decode the uidb64 to get the user's ID
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

            # Validate token
            if default_token_generator.check_token(user, token):
                return cls(success=True, errors=None)
            else:
                return cls(success=False, errors=['Invalid or expired token'])

        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return cls(success=False, errors=['Invalid reset link'])

class ResetPassword(relay.ClientIDMutation):
    class Input:
        token = graphene.String(required=True)
        uidb64 = graphene.String(required=True)
        new_password = graphene.String(required=True)
        confirm_password = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, root, info, token, uidb64, new_password, confirm_password):
        try:
            # Validate passwords match
            if new_password != confirm_password:
                return cls(success=False, errors=['Passwords do not match'])

            # Validate password complexity
            if len(new_password) < 8:
                return cls(success=False, errors=['Password must be at least 8 characters long'])

            # Decode the uidb64 to get the user's ID
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

            # Validate token
            if not default_token_generator.check_token(user, token):
                return cls(success=False, errors=['Invalid or expired token'])

            # Set new password
            user.set_password(new_password)
            user.save()

            return cls(success=True, errors=None)

        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return cls(success=False, errors=['Invalid reset link'])
        except Exception as e:
            return cls(success=False, errors=[str(e)])


# Queries (Relay Style)
class Query(graphene.ObjectType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)
    me = graphene.Field(UserNode)

    @login_required
    def resolve_me(self, info):
        return info.context.user


# Mutations (Relay Style)
class Mutation(graphene.ObjectType):
    token_auth = ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.relay.Verify.Field()
    refresh_token = graphql_jwt.relay.Refresh.Field()

    request_password_reset = RequestPasswordReset.Field()
    validate_reset_token = ValidatePasswordResetToken.Field()
    reset_password = ResetPassword.Field()

    create_user = CreateUser.Field()
    update_preferences = UpdatePreferences.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
