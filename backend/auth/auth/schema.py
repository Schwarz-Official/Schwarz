import graphene
from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from graphql_jwt.shortcuts import get_token, create_refresh_token
from graphql_jwt.decorators import login_required
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = ['email', 'first_name', 'last_name']
        interfaces = (relay.Node,)


class Register(relay.ClientIDMutation):
    user = graphene.Field(UserType)

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

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        email = kwargs.get('email')
        password = kwargs.get('password')
        first_name = kwargs.get('first_name')
        last_name = kwargs.get('last_name')
        date_of_birth = kwargs.get('date_of_birth')
        gender = kwargs.get('gender')
        address = kwargs.get('address')
        preferred_lang = kwargs.get('preferred_lang')
        company = kwargs.get('company')
        job_title = kwargs.get('job_title')
        industry = kwargs.get('industry')
        experience = kwargs.get('experience')

        if User.objects.filter(email=email).exists():
            raise Exception("Email already in use")

        user = User(
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
            experience=experience
        )
        user.set_password(password)
        user.is_active = False  # Deactivate account until email confirmation
        user.save()

        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        activation_link = f"{settings.FRONTEND_URL}/activate/{uid}/{token}"

        send_mail(
            'Activate your account',
            f'Activate your account by clicking the link: {activation_link}',
            settings.DEFAULT_FROM_EMAIL,
            [email],
        )

        return Register(user=user)


class ActivateUser(relay.ClientIDMutation):
    user = graphene.Field(UserType)

    class Input:
        uid = graphene.String(required=True)
        token = graphene.String(required=True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, uid, token):
        try:
            uid = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return ActivateUser(user=user)
        else:
            raise Exception('Activation link is invalid!')


class ResendActivationEmail(relay.ClientIDMutation):
    class Input:
        email = graphene.String(required=True)

    success = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, email):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise Exception("User with this email does not exist.")

        if not user.is_active:
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            activation_link = f"{settings.FRONTEND_URL}/activate/{uid}/{token}"

            send_mail(
                'Activate your account',
                f'Activate your account by clicking the link: {activation_link}',
                settings.DEFAULT_FROM_EMAIL,
                [email],
            )

            return ResendActivationEmail(success=True)
        else:
            raise Exception("Account is already active.")


class Login(relay.ClientIDMutation):
    user = graphene.Field(UserType)
    token = graphene.String()
    refresh_token = graphene.String()

    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, email, password):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise Exception('Invalid credentials')

        if not user.check_password(password):
            raise Exception('Invalid credentials')

        token = get_token(user)
        refresh_token = create_refresh_token(user)
        return Login(user=user, token=token, refresh_token=refresh_token)


class IsAuthenticated(ObjectType):
    is_authenticated = graphene.Boolean()

    def resolve_is_authenticated(self, info):
        user = info.context.user
        return user.is_authenticated


class PasswordReset(relay.ClientIDMutation):
    class Input:
        email = graphene.String(required=True)

    success = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, email):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise Exception("User with this email does not exist.")

        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_link = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}"

        send_mail(
            'Password Reset',
            f'Reset your password by clicking the link: {reset_link}',
            settings.DEFAULT_FROM_EMAIL,
            [email],
        )

        return PasswordReset(success=True)


class PasswordResetConfirm(relay.ClientIDMutation):
    class Input:
        uid = graphene.String(required=True)
        token = graphene.String(required=True)
        new_password = graphene.String(required=True)

    success = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, uid, token, new_password):
        try:
            uid = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.set_password(new_password)
            user.save()
            return PasswordResetConfirm(success=True)
        else:
            raise Exception('Password reset link is invalid!')


class Mutation(ObjectType):
    register = Register.Field()
    activate_user = ActivateUser.Field()
    resend_activation_email = ResendActivationEmail.Field()
    login = Login.Field()
    password_reset = PasswordReset.Field()
    password_reset_confirm = PasswordResetConfirm.Field()


schema = graphene.Schema(query=IsAuthenticated, mutation=Mutation)
