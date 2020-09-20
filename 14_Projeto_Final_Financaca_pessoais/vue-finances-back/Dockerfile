FROM node:14.11.0-alpine3.12

WORKDIR /user/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm","run", "dev" ]