##BUILD IMAGE

FROM node:alpine

WORKDIR /app/

COPY . . 

RUN npm install
RUN npm run build

FROM nginx:alpine