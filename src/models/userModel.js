const Sequelize = require('sequelize')
const database = require('../db')
const Chat = require('./Chat')

const userModel = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cnpj: {
    type: Sequelize.STRING
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

userModel.hasMany(Chat)

Chat.belongsTo(userModel, {
  foreiignKey: 'userId'
})

module.exports = userModel
