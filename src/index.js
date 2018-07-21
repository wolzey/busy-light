import express  from 'express'

const app = express()
app.use(require('cors')())

let io = require('socket.io')(1337)

import ArduinoService from './handlers'
const Arduino = new ArduinoService("/dev/ttyACM0")

io.on('connection', (socket) => {
  socket.on('turn on', Arduino.turnOnHandler.bind(Arduino))
  socket.on('turn off', Arduino.turnOffHandler.bind(Arduino))
})

app.get('/', (req, res) => {
  return res.json('ok')
})

app.listen(process.env.PORT || 3001)
