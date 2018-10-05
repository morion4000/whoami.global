FROM node:8-alpine

RUN apk update && apk add --no-cache git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

CMD [ "npm", "run", "start" ]
