import graphene
import graphql_jwt
from accounts.models import UserPreferences
from django.contrib.auth import get_user_model
from django.utils import timezone
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_jwt.decorators import login_required

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


# Create User Mutation (Relay style)
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


# Update User Preferences Mutation (Relay style)
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

    create_user = CreateUser.Field()
    update_preferences = UpdatePreferences.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
