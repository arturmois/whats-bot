const express = require('express')
const router = express.Router()
const webhooksController = require('../controllers/webhooksController')

router.get('/whatsapp/:id', webhooksController.getWebhookById)

router.get('/whatsapp', webhooksController.getWebhooks)

router.post('/whatsapp', webhooksController.insertWebhook)

router.delete('/whatsapp/:id', webhooksController.deleteWebhook)

module.exports = router
