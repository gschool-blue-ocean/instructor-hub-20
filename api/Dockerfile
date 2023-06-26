FROM node:16-alpine
WORKDIR /code
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run migrate
RUN npm run seed
EXPOSE 3000
CMD ["npm", "start"]
