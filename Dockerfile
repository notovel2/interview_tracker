ARG NODE_VERSION=16.15.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

EXPOSE 8089

CMD yarn docker:dev
