const express = require('express')

const app = express()

app.use(express.json())

const webhooksRouter = require('./routers/webhooksRouter')
app.use('/api', webhooksRouter)

module.exports = app
