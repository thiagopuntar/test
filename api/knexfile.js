require("dotenv").config();
const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  test: {
    client: "sqlite3",
    connection: ":memory:",
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
