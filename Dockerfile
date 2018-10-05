FROM node:8-alpine

RUN apk update && apk add --no-cache git make g++ python python-dev py-pip

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install
RUN npm install -g truffle
RUN truffle compile

CMD [ "npm", "run", "start" ]
