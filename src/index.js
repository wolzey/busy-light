import express  from 'express'
import socketio from 'socket.io'

const app = express()

import './socket'

app.listen(process.env.PORT || 3001)
