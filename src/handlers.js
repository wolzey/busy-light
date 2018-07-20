import SerialPort from 'serialport'
import {
  TURN_OFF,
  TURN_ON,
  CHANGE_COLOR
} from './events'

const Arduino = new SerialPort('/dev/ttyACM0', { baudRate: 9600 }, (error) => {
  if (error) return console.log('Cannot connect to arduino :(')
})

export function turnOffHandler () {
  Arduino.write(TURN_OFF + '\n')
}

export function turnOnHandler () {
  Arduino.write(TURN_ON + '\n')
}

export function changeColorHandler (green, red, blue) {
  Arduino.write(`${green}-${red}-${blue}\n`)
}
