const settingsModel = require('../models/settingsModel')

async function getDefaultSettings () {
  return settingsModel.findOne()
}

module.exports = {
  getDefaultSettings
}
