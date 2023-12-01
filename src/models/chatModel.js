const Sequelize = require('sequelize')
const database = require('../db')

const chatModel = database.define('chat', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  problemType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descriptionProblem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = chatModel
