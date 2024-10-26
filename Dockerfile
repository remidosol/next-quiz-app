FROM node:20.12-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .