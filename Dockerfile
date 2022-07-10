FROM node

WORKDIR /app

COPY /m-wc-figlet/package.json /app

RUN npm install

COPY /m-wc-figlet/. /app

EXPOSE 8000

CMD [ "npm", "run", "start" ]
