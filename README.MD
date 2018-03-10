### How to use the template

##### Create project folder
```
$ mkdir <project_root>
$ cd <project_root> 
``` 

##### Create the virtual environment for the project
```
$ virtualenv env or virtualenv --python=/usr/bin/python3.5 env
$ source env/bin/activate
```

Or if you're using [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html):
```
$ mkvirtualenv env -p python3.5
$ workon env
```

##### Install Django and apply the template (more info [here](https://www.maykinmedia.nl/blog/2013/jun/6/customizing-django-startproject-templates/))
```
$ pip install django
$ django-admin.py startproject --template=https://github.com/Clarity-89/django_boilerplate/archive/master.zip --extension=py,rst,rb,html,json <project_name>
```

##### Generate the pinned versions of the requirements:
```
$ pip install pip setuptools --upgrade (optional)
$ pip install pip-tools
$ cd requirements
$ pip-compile base.in
$ cd ..
```

To get the latest versions of the packages run
```
$ pip-compile --upgrade base.in
```

### How to use the generated project

##### Install required packages
`$ pip install -r requirements/base.txt`

##### Create the database and the user
For dev environment the db, username and password default to the project name

##### Run migrations
```
$ python src/manage.py migrate
``` 
You can also make `src/manage.py` executable and run it without `python`
```
$ chmod +x src/manage.py
$ src/manage.py migrate
``` 

##### Install front-end dependencies and dev build task
```
$ npm install
$ npm run dev
```

###### Start the dev server
```
$ (python) src/manage.py runserver 
```