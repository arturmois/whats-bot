const app = require('./app');

(async () => {
  console.log('Starting the Server...')
  app.listen(process.env.PORT, () => {
    console.log(`App is running at ${process.env.PORT}!`)
  })
})()
