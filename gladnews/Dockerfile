FROM docker.io/mtpereira/serverless:1.21.1

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile