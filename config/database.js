const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense','root', 'Dahal@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;