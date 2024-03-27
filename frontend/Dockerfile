FROM node:14.21.3-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install --silent
RUN npm install chart.js

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]