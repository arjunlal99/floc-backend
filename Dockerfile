FROM ubuntu:latest

WORKDIR /usr/src/backend-api


COPY package.json .

RUN apt-get update

RUN apt-get -y install curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash

RUN apt-get -y install nodejs

ADD models/ /usr/src/backend-api/models

COPY index.js .env ./

RUN npm install

EXPOSE 8001

RUN nohup node index.js &


