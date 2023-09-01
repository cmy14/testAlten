# nodeApiserver

Rest api nodejs

## First nodejs app\

 done  :  my purspose is to create a template with node  and express.\
 wip  : connect with database mongodb and my sql \
  try prisma and sequelize \
create scheduler\
 try  node-cron\
send mail \
add Oauth2 \
add stripe \
conseil pour les dto \
  
mapper
<https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/#Repositories>

<https://khalilstemmler.com/articles/enterprise-typescript-nodejs/use-dtos-to-enforce-a-layer-of-indirection>**

## Project step by step

### Init project

  npm init -y\

### Create directory for source

  mkdir src

### Add dependancies

  npm install body-parser cors express helmet morgan

### Run project
  
* node src

ou

* npm run dev
#### __Explanation__

        -body-parser: This dependency will be used to convert the base of incoming applications into JavaScript objects.

        -cors: Cross-Origin Resource Sharing(CORS) is a dependency that is used to configure Express to combine headers specifying that your Rest API accepts requests from any source. 


        -express: This dependency denotes the Express library.

        -helmet: This module establishes different HTTP headers to safeguard Express APIs.

        -morgan: This package extends your Express Rest API’s logging capabilities.

You need to mark two items in your project after initiating the previous command. The package.json file with all the libraries before it will include an original feature called dependencies.  

## Docker

 run docker-compose.yml

### Start docker

* docker-compose up

equals to docker-compose build  & docker-compose run

option -d to detatch

### Stop docker

* docker-composer stop

### To delete

* docker-compose down [option]
 remplace option by --volumes if you want erase the volume

### to list images

* docker-compose images

### to list containers

* docker-compose ps

## information  information

  port mongodb : 27017

## convertir de  js  typescript

<https://plainenglish.io/blog/how-to-convert-node-js-code-from-javascript-to-typescript-8e7d031a8f49>

## pour lancer le build

tsc --build --verbose --incremental --watch


