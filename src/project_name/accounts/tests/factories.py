import factory

from ..models import User


class UserFactory(factory.django.DjangoModelFactory):

    first_name = factory.Sequence(lambda n: 'User {n}'.format(n=n))
    last_name = 'Doe'
    email = factory.Sequence(lambda n: 'user-{n}@test.net'.format(n=n))

    class Meta:
        model = User


class SuperUserFactory(UserFactory):

    is_staff = True
    is_superuser = True
