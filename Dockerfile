FROM node:9.11-alpine

RUN mkdir /app
RUN mkdir /app/bin

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install --production

COPY bin/ /app/bin
COPY index.js /app

EXPOSE 3000

CMD ["node", "index.js"]
