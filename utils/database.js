const Sequelize = require("sequelize");
const DB_SCHEMA = "node-todo";
const USER_NAME = "root";
const PASSWORD = "Reactpro228";

const sequelize = new Sequelize(DB_SCHEMA, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
