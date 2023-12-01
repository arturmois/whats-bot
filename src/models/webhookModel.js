const Sequelize = require('sequelize')
const database = require('../db')

const webhookModel = database.define('webhook', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  text: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = webhookModel
