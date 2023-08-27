# Create your models here.
from djongo import models


class User(models.Model):
    username = models.CharField(max_length=100)


class Asset(models.Model):
    asset_name = models.CharField(max_length=100)

    class Meta:
        db_table = 'asset_collection'  # Name of the MongoDB collection

# class AnalyticData(models.Model):
# Model for data to be stored in Redshift
