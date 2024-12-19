from node:18.15-bullseye

WORKDIR /worklogs-report

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn setup

CMD ["yarn", "start"]
