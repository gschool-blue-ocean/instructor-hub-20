export default {
  root: "src",
  server: {
    proxy: {
      "/api": process.env.API_URL,
    },
    port: process.env.CLIENT_PORT,
  },
  test: {
    environment: "jsdom",
    watch: false,
  },
};
