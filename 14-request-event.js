const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
//server extends the EventEmitter class
const server = http.createServer()
//behind the scenes server emits request event
// we can then subcribe to it / listen for it / respond to it 
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)