# Generated by Django 3.2.4 on 2021-07-15 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0007_auto_20210715_1353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='body',
            field=models.TextField(blank=True),
        ),
    ]
