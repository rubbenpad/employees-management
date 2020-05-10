'use strict'

require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || 'aVeryStrongSecret',
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    logging: false
  },
  sqlite: {
    dialect: 'sqlite',
    storage: './store.sqlite',
    logging: false
  }
}

module.exports = { config }
