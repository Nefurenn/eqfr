const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.post('/message', controllers.message.sendMessage)

module.exports = router