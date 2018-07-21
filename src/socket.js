import { socketPort } from './config'
import {
  CHANGE_COLOR,
  TURN_OFF,
  TURN_ON
} from './events'

const io = require('socket.io')(socketPort)

io.on('connection', (socket) => {
  console.log('Socket connected')
  // socket.on(CHANGE_COLOR, changeColorHandler)
  // socket.on(TURN_OFF, turnOffHandler)
  // socket.on(TURN_ON, turnOnHandler)
})

io.on('error', (err) => console.log(err))

export default io
