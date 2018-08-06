module.exports = {
  env: "development",
  app: {
    title: "Blog Multi User",
    description: "My test website"
  },
  server: {
    port: 3000
  },
  modules: {
    articles: {
      perPageLimit: 5
    },
    categories: {
      perPageLimit: 5
    },
    users: {
      perPageLimit: 5
    }
  },
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  sendgrid: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASS
  }
};
