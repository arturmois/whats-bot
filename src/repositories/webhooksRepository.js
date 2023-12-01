const webhookModel = require('../models/webhookModel')

async function getWebhookById (id) {
  return await webhookModel.findByPk(id)
}

async function getWebhooks () {
  return await webhookModel.findAll()
}

async function insertWebhook (newWebhook) {
  return await webhookModel.create(newWebhook)
}

async function deleteWebhook (id) {
  return await webhookModel.destroy({ where: { id } })
}

module.exports = {
  getWebhookById,
  getWebhooks,
  insertWebhook,
  deleteWebhook
}
