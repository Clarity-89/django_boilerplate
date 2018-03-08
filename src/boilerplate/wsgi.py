"""
WSGI config for clarityv2 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""
import os
import sys

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "boilerplate.settings.production")


def setupenv():
    src_dir = os.path.dirname(os.path.abspath(__file__))
    sys.path = [src_dir] + sys.path


setupenv()


def init_newrelic():
    if os.environ.get('PROJECT_ROOT'):
        try:
            import newrelic.agent
            newrelic.agent.initialize(os.path.join(os.environ.get('PROJECT_ROOT'), 'newrelic.ini'), 'production')
        except Exception as e:
            print("Could not initialize New Relic APM, ignoring:")
            print(e)


# Enable New Relic on production
# init_newrelic()

application = get_wsgi_application()
