FROM mcr.microsoft.com/playwright:focal

# Install Firefox dependencies
RUN apt-get update && apt-get install -y --no-install-recommends firefox

# Install WebKit dependencies
RUN apt-get update && apt-get install -y --no-install-recommends libxkbcommon-x11-0 \
  libgtk-3-0 \
  libnss3 \
  libxss1 \
  libasound2

WORKDIR /code
COPY package*.json .
RUN npm install -D @playwright/test
COPY . .
EXPOSE 6000
CMD ["npx", "playwright", "test"]
