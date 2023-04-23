const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {

    //PROCEDIMIENTO 1
    console.log('Un usuario se a conectado')

    //PROCEDIMIENTO 2
    socket.on('disconnect', () => {

        console.log('Un usuario se ha desconectado')

    })

    //PROCEDIMINETO 3
    socket.on('chat', (msg) => {

        console.log('Mensaje: ' + msg)
        //PROCEDIMIENTO 4
        io.emit('chat', msg)

    })

})

app.get('/', (req, res) => {

    res.sendFile(`${__dirname}/cliente/index.html`)

})

server.listen(3000, () => {

    console.log('Servidor corriendo en http://localhost:3000')

})