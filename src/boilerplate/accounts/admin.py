from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from hijack_admin.admin import HijackUserAdminMixin
from solo.admin import SingletonModelAdmin

from .models import User, AdminUser


@admin.register(User)
class _UserAdmin(UserAdmin, HijackUserAdminMixin):
    list_display = UserAdmin.list_display + ('hijack_field',)


admin.site.register(AdminUser, SingletonModelAdmin)
