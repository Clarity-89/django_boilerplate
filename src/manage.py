#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    if os.getenv('ON_HEROKU') == '1':
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{ project_name|lower }}.settings.staging")
    elif os.getenv('PROD') == '1':
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{ project_name|lower }}.settings.production")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{ project_name|lower }}.settings.dev")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
