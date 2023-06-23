export default {
  root: "src",
  server: {
    proxy: {
      "/api": {
        target: process.env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: process.env.PORT,
  },
  test: {
    environment: "jsdom",
    watch: false,
  },
};
