const Sequelize = require('sequelize')
const database = require('../db')

const settingsModel = database.define('settings', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  wppApiUrl: Sequelize.STRING,
  wppPhoneNumberId: Sequelize.STRING,
  wppAccessToken: Sequelize.TEXT,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = settingsModel
