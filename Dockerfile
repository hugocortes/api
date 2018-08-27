FROM node:9-alpine

RUN mkdir /app
RUN mkdir /app/bin

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install --production

COPY bin/ /app/bin
COPY index.js /app

COPY docker-entrypoint.sh /app

ENTRYPOINT [ "sh", "./docker-entrypoint.sh" ]
