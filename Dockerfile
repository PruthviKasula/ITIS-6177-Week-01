FROM node:12

WORKDIR /app

COPY package*.JSON ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]

