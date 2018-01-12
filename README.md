# React Blog

## Introduction

This is a simple blog application. I use it as a starter kit for any ReactJs/NodeJs projects in the future.


## Run app with docker (no configuration required)

1. Install [docker](https://www.docker.com/community-edition) and [docker-compose](https://docs.docker.com/compose/install/) to the target machine. Make sure port 8080 and 3002 are available.

2. Run below command in terminal to start the app:

```
docker-compose up -d
```

3. Run below command in terminal to init database with sample data

```
sh data/import.sh
```

4. Visit the address [http://localhost:8080](http://localhost:8080) in the browser. A website should show up.


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

```
sh data/import.sh
```

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

## Directory Layout

```
.
├── /data/                      # ...
├── /node_modules/              # 3rd-party libraries and utilities
├── /server/                    # source code of NodeJs application
│   ├── /modules/               # ...
│   ├── /node_modules/          # ...
│   ├── /test/                  # ...
│   ├── .env.example            # ...
│   ├── app.js                  # ...
│   ├── config.js               # ...
│   └── index.js                # ...
├── /src/                       # source code of ReactJs application
│   ├── /admin/                 # admin module's source code
│   │   ├── /pages/             # components for entire page
│   │   ├── /widget/            # components for reusable parts in web
│   │   ├── actions.js          # redux actions
│   │   ├── reducers.js         # redux module's reducer
│   │   ├── helpers.js          # reusable functions in module
│   ├── /blog/                  # blog module's source code
│   ├── /common/                # reusable code for all projects
│   └── ...                     # Other modules's code
├── .dockerignore               # Files/directories to exclude when building docker image
├── .gitlab-ci.yml              # Gitlab CI/CD configuration file
├── docker-compose.yml          # Defining and running multi-container Docker applications
├── Dockerfile                  # Commands for building a Docker image for production
├── README.md                   # Contain project's installation guide
├── package.json                # The list of 3rd party libraries and utilities
├── webpack.common.js           # Shared webpack configuration for both development & production
├── webpack.dev.js              # Webpack configuration for development
└── webpack.prod.js             # Webpack configuration for production
```

## Features

### ReactJs app

### NodeJs app