# Generated by Django 3.2.4 on 2021-07-09 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_message_was_read'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='is_remove',
            field=models.NullBooleanField(default=False),
        ),
    ]
