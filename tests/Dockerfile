FROM node:16-alpine
WORKDIR /code
COPY package*.json .
RUN npm install ci
COPY . .
EXPOSE 6000
CMD echo "Testing suite is up and running"