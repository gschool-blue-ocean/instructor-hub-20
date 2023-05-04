FROM node:16-alpine
WORKDIR /code
COPY package*.json .
RUN npm ci
RUN npm seed
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
