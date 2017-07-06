const http = require('http')
const path = require('path')

const express = require('express')
const config = require('./config')
const log = require('./libs/logger').createLogger('app.index')

const app = express()
const PORT = process.env.PORT || config.PORT

app.get('/{mobile}', (req, res) => {
  res.status(200)
    .type('js')
    .send(``)
})

const server = http.createServer(app)

server.listen(PORT)
log.info(`Listening on port ${PORT}`)
