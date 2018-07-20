import express  from 'express'
import socketio from 'socket.io'

const app = express()

import './socket'

import ArduinoService from './handlers'

let Arduino = new ArduinoService("/dev/ttyACM0")

setTimeout(() => {
  Arduino.changeColorHandler('255', '000', '125');
}, 3000)

setTimeout(() => {
  Arduino.changeColorHandler('155', '000', '255');
}, 6000)

setTimeout(() => {
  Arduino.turnOffHandler();
}, 9000)

app.listen(process.env.PORT || 3001)
