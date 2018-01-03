# React Blog

## Introduction

This is a simple blog application. I use it as a starter kit for any ReactJs/NodeJs projects in the future.


## Run app with docker (no configuration required)

1. Install [docker](https://www.docker.com/community-edition) and [docker-compose](https://docs.docker.com/compose/install/) to your machine.

2. Run below command in terminal to start the app:

```
docker-compose up -d
```

3. Visit the address `http://localhost:8080` in the browser. A website should show up.


## Setup the project for development

### 1. Installing dependencies

``` bash
npm install
cd server
npm install
```

### 2. Setting environment variables

Rename the file `.env.example` to `.env`. Open the edited file and change values here to fit your development environment.

### 3. Import test data to database

Run the import scripts in `data/import.sh`

### 4. Run the app

React app

``` bash
npm start
```

Api server

``` bash
cd server
npm start
```


## Exporting database

Run the export scripts in `data/export.sh`


