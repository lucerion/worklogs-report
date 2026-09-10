ARG NODE_VERSION
ARG YARN_VERSION

FROM node:${NODE_VERSION}-slim

RUN corepack disable \
    && npm install -g yarn@${YARN_VERSION}

WORKDIR /worklogs-report

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
