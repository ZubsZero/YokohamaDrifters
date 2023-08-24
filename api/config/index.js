require("dotenv").config();
const { createPool } = require("mysql");
const connection = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  port: process.env.dbport,
  database: process.env.dbName,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connection;
