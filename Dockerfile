FROM node:8.16.0-alpine
RUN npm install -g ts-node typescript
WORKDIR /usr/src/app
