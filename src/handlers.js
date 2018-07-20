import SerialPort from 'serialport'
import {
  TURN_OFF,
  TURN_ON,
  CHANGE_COLOR
} from './events'

const Arduino = new SerialPort('/dev/ttyACM0', { baudRate: 9600 }, (error) => {
  if (error) return console.log('Cannot connect to arduino :(')
})

export default class Arduino {
  constructor(port) {
    this.arduino = new SerialPort(port, { baudRate: 9600}, (error) => {
      if (error) return console.log('Cannot connect to arduino :(')
    })
  }

  turnOffHandler () {
    this.arduino.write(TURN_OFF + '\n')
  }

  turnOnHandler () {
    this.arduino.write(TURN_ON + '\n')
  }

  changeColorHandler (green, red, blue) {
    this.arduino.write(`${red},${green},${blue}\n`)
  }
}
