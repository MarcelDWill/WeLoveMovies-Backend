const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://we_love_movies_af68_user:scjwiLvcTqWVQN5tYt6mEIZjm1bYXXef@dpg-ctq8vctds78s73d9f9o0-a.virginia-postgres.render.com:5432/we_love_movies_af68",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
