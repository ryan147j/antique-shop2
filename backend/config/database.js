const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('antiques_shop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('../models/antiques')(sequelize, DataTypes);


//  sequelize.sync({ alter: true });
// console.log('All models were synchronized successfully.');

module.exports = db