import socketio from 'socket.io'
import { socketPort } from './config'
import {
  CHANGE_COLOR,
  TURN_OFF,
  TURN_ON
} from './events'

const io = socketio(socketPort)

io.on('connection', (socket) => {
  console.log('Socket connected')
  // socket.on(CHANGE_COLOR, changeColorHandler)
  // socket.on(TURN_OFF, turnOffHandler)
  // socket.on(TURN_ON, turnOnHandler)
})

export default io
