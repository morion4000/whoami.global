FROM node:8-alpine

RUN apk update && apk add --no-cache git python2.7 python-pip

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

CMD [ "npm", "run", "start" ]
