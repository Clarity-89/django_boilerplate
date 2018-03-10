from django.test import TestCase

from ..models import User


class UserManagerTests(TestCase):

    def test_create_superuser(self):
        user = User.objects.create_superuser('test', 'test@me.com', 'test1111')
        self.assertIsNotNone(user.pk)
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)
        self.assertEqual(user.username, 'test')
        self.assertEqual(user.email, 'test@me.com')
        self.assertTrue(user.check_password('test1111'))
        self.assertNotEqual(user.password, 'test1111')

    def test_create_user(self):
        user = User.objects.create_user('test1')
        self.assertIsNotNone(user.pk)
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.has_usable_password())
