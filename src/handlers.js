import SerialPort from 'serialport'
import {
  TURN_OFF,
  TURN_ON,
  CHANGE_COLOR
} from './events'

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

  changeColorHandler (red, green, blue) {
    this.arduino.write(`${red},${green},${blue}\n`)
  }
}
