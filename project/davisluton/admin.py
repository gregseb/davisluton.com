from django.contrib import admin
from .models import Portfolio, PortfolioImage


class PortfolioImageInline(admin.TabularInline):
    model = PortfolioImage
    exclude = ['status_changed', 'created', 'modified', 'is_removed']
    extra = 3


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    exclude = ['status_changed', 'created', 'modified', 'is_removed']
    inlines = [PortfolioImageInline]
