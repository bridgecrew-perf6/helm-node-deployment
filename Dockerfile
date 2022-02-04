from node:16.5-alpine

# Create app directory
WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]