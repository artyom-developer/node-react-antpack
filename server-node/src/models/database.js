var Sequelize = require('sequelize');

const database = new Sequelize(
  'antpack', // name database
  'root', // user database
  '', // password database
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

database.sync()

module.exports = database;
