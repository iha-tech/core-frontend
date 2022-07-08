FROM node:16-alpine

COPY package*.json ./

RUN npm install

EXPOSE 3000
EXPOSE 3001

COPY . .

CMD ["npm", "run", "dev"]
