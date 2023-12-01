'use strict'
require('dotenv').config()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const settingsId = await queryInterface.rawSelect('settings', { where: {}, limit: 1 }, ['id'])
    if (!settingsId) {
      return queryInterface.bulkInsert('settings', [{
        wppApiUrl: process.env.WPP_API_URL,
        wppPhoneNumberId: process.env.WPP_PHONE_NUMBER_ID,
        wppAccessToken: process.env.WPP_ACCESS_TOKEN,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('settings', null, {})
  }
}
