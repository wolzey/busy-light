import express  from 'express'

const app = express()
app.use(require('cors')())

let io = require('socket.io')(1337)

import ArduinoService from './handlers'
let Arduino = new ArduinoService("/dev/ttyACM0")

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('turn on', Arduino.turnOnHandler)
  socket.on('turn off', Arduino.turnOffHandler)
})

app.get('/', (req, res) => {
  return res.json('ok')
})

app.listen(process.env.PORT || 3001)
