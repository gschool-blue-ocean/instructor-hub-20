FROM mcr.microsoft.com/playwright
WORKDIR /code
COPY package*.json .
RUN npm install -D @playwright/test
COPY . .
EXPOSE 6000
CMD ["npx", "playwright", "test"]
