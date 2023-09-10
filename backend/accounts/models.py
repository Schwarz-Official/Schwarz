from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


#  Custom User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, age, gender, address, preferred_lang, company, job_title,
                    industry, experience, password=None, password2=None):
        """
      Creates and saves a User with the given email, name, tc and password.
      """
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            age=age,
            gender=gender,
            address=address,
            preferred_lang=preferred_lang,
            company=company,
            job_title=job_title,
            industry=industry,
            experience=experience
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, age, gender, address, preferred_lang, company, job_title,
                    industry, experience, password=None):
        """
      Creates and saves a superuser with the given email, name, tc and password.
      """
        user = self.create_user(
            email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            age=age,
            gender=gender,
            address=address,
            preferred_lang=preferred_lang,
            company=company,
            job_title=job_title,
            industry=industry,
            experience=experience
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


#  Custom User Model
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
    )
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=200)
    address = models.CharField(max_length=600)
    preferred_lang = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    job_title = models.CharField(max_length=200)
    industry = models.CharField(max_length=400)
    experience = models.IntegerField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'age', 'gender', 'address', 'preferred_lang', 'company',
                       'job_title', 'industry', 'experience']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        """Is the user a member of staff?"""
        # Simplest possible answer: All admins are staff
        return self.is_admin