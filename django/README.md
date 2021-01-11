# Installation process

* generate vEnv and activate it
* install all deps via requirements.txt
* Apply all migrations
* Generate static files

```md
python3 -m venv ./venv && ./venv/bin/activation && pip3 -r requirements.txt && ./manage.py makemigrations && ./manage.py migrate && ./manage.py collectstatic
```

# Run an app

```md
./manage.py runserver
```

