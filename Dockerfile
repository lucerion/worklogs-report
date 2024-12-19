from node:18.15-bullseye

ARG DEV_PACKAGES="yarn"

RUN apt-get update -qq && \
    apt-get install -yq --no-install-recommends $DEV_PACKAGES

WORKDIR /worklogs-report

COPY . .

RUN yarn setup

RUN yarn install

CMD ["yarn", "start"]
