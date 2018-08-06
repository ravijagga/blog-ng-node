module.exports = {
  env: "development",
  server: {
    port: process.env.PORT
  },
  database: {
    url: process.env.DEV_DB_URL || "mongodb://localhost/blog-ng-node"
  }
};
