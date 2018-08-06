module.exports = {
  env: "production",
  server: {
    port: process.env.PORT
  },
  database: {
    url: process.env.PROD_DB_URL
  },
  misc: {
    showConsole: process.env.PROD_SHOW_CONSOLE || false
  }
};