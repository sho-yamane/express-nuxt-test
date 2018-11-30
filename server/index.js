const express = require('express')
const consola = require('consola')
const constants = require("./constants")
const { Nuxt, Builder } = require('nuxt')

// routes
const userRoute = require("./api/routes/user")

// models
const user = require("./api/models/User")

// Init
const app = express()

app.set('port', constants.port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  /* if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } */

  // Route
  // app.use('/api/v1/user', userRoute)

  // Give nuxt middleware to express
  // app.use(nuxt.render)

  app.get('/', (req, res) => {
    (async () => {
      req.data = await user()
      const result = await nuxt.renderRoute('/top', { req })
      res.send(result.html)
    })()
  })


  // Listen the server
  app.listen(constants.port, constants.host)
  consola.ready({
    message: `Server listening on http://${constants.host}:${constants.port}`,
    badge: true
  })
}
start()
