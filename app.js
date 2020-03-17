const express = require('express')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const bodyParser = require('body-parser')
const telegramBot = require('./services/bot')

const app = express()

app.use((req, res, next) => {
  res.bot = telegramBot
  next()
})

app.use(bodyParser.json())

routes(app)

app.listen(config.port, function () {
  console.log(`server listening on port ${config.port}`)
})