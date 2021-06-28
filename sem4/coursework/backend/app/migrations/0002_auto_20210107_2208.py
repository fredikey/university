# Generated by Django 3.1.5 on 2021-01-07 22:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('sale_start', models.DateTimeField(auto_now_add=True)),
                ('time_end', models.DateTimeField()),
                ('time_start', models.DateTimeField()),
                ('status', models.IntegerField(choices=[(0, 'В продаже'), (1, 'Проходит сейчас'), (2, 'Отменено'), (3, 'Все распродано'), (4, 'Завершено')], default=0)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.address')),
            ],
        ),
        migrations.CreateModel(
            name='EventType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TicketClass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('amount', models.IntegerField()),
                ('ticket_type', models.IntegerField(choices=[(0, 'Место'), (1, 'Вход')], default=0)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.event')),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.event')),
                ('seat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.seat')),
                ('ticket_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.ticketclass')),
            ],
        ),
        migrations.CreateModel(
            name='SeatTicketClass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.seat')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.ticket')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=50)),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.ticket')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='event_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.eventtype'),
        ),
    ]