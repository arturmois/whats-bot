const express = require('express')
const router = express.Router()
const settingsController = require('../controllers/settingsController')

router.get('/', settingsController.getDefaultSettings)

module.exports = router
