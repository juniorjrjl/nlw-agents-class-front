FROM node:22.17.0

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH=/nlw-agents-class-front

RUN mkdir -p "$INSTALL_PATH"

WORKDIR $INSTALL_PATH

RUN npm install -D vite@7.0.4

COPY package*.json .

RUN npm i

COPY . .