FROM mcr.microsoft.com/playwright
WORKDIR /code
COPY package*.json .
# RUN npm ci
# RUN npx playwright install --with-deps
RUN npm install -D @playwright/test
COPY . .
EXPOSE 6000
CMD ["npx", "playwright", "test"]
