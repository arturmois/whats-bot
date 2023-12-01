const express = require('express')
const router = express.Router()
const webhooksController = require('../controllers/webhooksController')

router.get('/whatsapp', webhooksController.newWebhook)

router.post('/whatsapp', webhooksController.newWebhook)

module.exports = router
