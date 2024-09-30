const { Sequelize } = require("sequelize")

const createDB = new Sequelize("db", "anu", "123", {
    dialect: "sqlite",
    host: "./config/db.sqlite"

});

module.exports = createDB;