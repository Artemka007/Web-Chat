# Generated by Django 3.2.4 on 2021-07-15 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0005_auto_20210709_1923'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='audio_message',
            field=models.FileField(blank=True, null=True, upload_to='audio_messages/'),
        ),
    ]