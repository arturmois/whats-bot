'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('settings', {
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
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('settings')
  }
}
