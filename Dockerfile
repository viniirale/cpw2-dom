FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get -y install nodejs && \
    apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN npm install
CMD [ "npm", "test"]