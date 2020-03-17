const TelegramBot = require('node-telegram-bot-api')
const config = require('config-lite')(__dirname)
const token = config.token

const bot = new TelegramBot(token, {polling: false})


module.exports = bot