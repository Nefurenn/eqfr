exports.sendMessage = (req, res) => {
  
  const chatId = req.body.chatId
  const message = req.body.message
  if (!chatId || !message) {
    res.sendStatus(422)
    res.end()
    return
  }
  res.bot.sendMessage(chatId, message)
  res.end()
}