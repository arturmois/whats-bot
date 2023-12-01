const settingsRepository = require('../repositories/settingsRepository')

async function getDefaultSettings (req, res) {
  res.json(await settingsRepository.getDefaultSettings())
}

module.exports = {
  getDefaultSettings
}
