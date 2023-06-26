FROM mcr.microsoft.com/playwright:v1.35.0-jammy

WORKDIR /code
COPY package*.json .
RUN npm install -D @playwright/test
COPY . .
EXPOSE 6000
CMD ["npx", "playwright", "test"]
