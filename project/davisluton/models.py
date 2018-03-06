from django.db import models
from model_utils.models import TimeStampedModel, StatusModel, SoftDeletableModel
from model_utils.managers import SoftDeletableManager
from model_utils import Choices


class BaseModel(TimeStampedModel, StatusModel, SoftDeletableModel):
    STATUS = Choices('draft', 'published')

    objects = SoftDeletableManager()

    class Meta:
        abstract = True


class Portfolio(BaseModel):
    image = models.ImageField()
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)


class PortfolioImage(BaseModel):
    image = models.ImageField()
    description = models.TextField(blank=True, null=True)

    portfolio = models.ForeignKey('Portfolio', on_delete=models.CASCADE)
