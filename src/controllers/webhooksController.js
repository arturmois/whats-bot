const webhooksRepository = require('../repositories/webhooksRepository')
const settingsRepository = require('../repositories/settingsRepository')
const WhatsApp = require('../services/whatsapp')

async function newWebhook (req, res) {
  try {
    const data = req.body
    const requestType = req.method
    const name = data.entry[0].changes[0].value.contacts[0].profile.name
    const settings = await settingsRepository.getDefaultSettings()
    const wpp = new WhatsApp(settings.wppApiUrl, settings.wppPhoneNumberId, settings.wppAccessToken)

    const message = `Olá, ${name}, tudo bem? \n Em que posso te ajudar?`
    console.log(message)
    const x = true
    if (x) { console.log(wpp.sendMessage('5583981974276', message)) }

    await webhooksRepository.insertWebhook({ text: JSON.stringify(data), type: requestType })

    // res.send(data['hub.challenge'])z
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  newWebhook
}
