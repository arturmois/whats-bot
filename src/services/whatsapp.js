// API ENDPOINTS
// sendMessage
// getMessage
const axios = require('axios').default

module.exports = class WhatsApp {
  constructor (wppApiUrl, wppPhoneNumberId, wppAccessToken) {
    this.wppApiUrl = wppApiUrl
    this.wppPhoneNumberId = wppPhoneNumberId
    this.wppAccessToken = wppAccessToken
  }

  sendMessage (to = '5583981974276', message = 'hello_world') {
    const options = {
      method: 'POST',
      url: `https://graph.facebook.com/v17.0/${this.wppPhoneNumberId}/messages`,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.4.5',
        Authorization: `Bearer ${this.wppAccessToken}`
      },
      data: {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: message }
      }
    }

    axios.request(options).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.error(error)
    })
  }
}
