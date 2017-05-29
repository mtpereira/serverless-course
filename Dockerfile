FROM node:7.10-alpine

ENV SERVERLESS_VERSION=1.10.0

RUN mkdir -p /serverless \
    && apk add --update \
        groff \
        less \
        python \
    && apk add --virtual .builddeps \
        py-pip \
    && pip install --no-cache-dir \
        awscli \
    && apk --purge --no-cache del .builddeps \
    && yarn global add serverless@${SERVERLESS_VERSION}

USER node
WORKDIR /serverless
ENTRYPOINT ["serverless"]
