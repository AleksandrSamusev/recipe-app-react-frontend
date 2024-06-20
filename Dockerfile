FROM node:current-alpine3.14

MAINTAINER alex.samusev.81@gmail.com

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]