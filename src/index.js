import express  from 'express'

const app = express()
app.use(require('cors')())

let io = require('socket.io')(1337)

import ArduinoService from './handlers'
const Arduino = new ArduinoService("/dev/ttyACM0")

io.on('connection', (socket) => {
  socket.on('turn on', () => {
    Arduino.turnOnHandler()
  })
  socket.on('turn off', () => {
    Arduino.turnOffHandler()
  })
  socket.on('change color', ({red, green, blue}) => {
    Arduino.changeColorHandler(red, green, blue)
  })
})

app.get('/', (req, res) => {
  return res.json('ok')
})

app.listen(process.env.PORT || 3001)
console.log("app healthy... Listening...", process.env.PORT || 3001)
