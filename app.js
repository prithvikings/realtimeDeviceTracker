const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const Server = http.createServer(app);
const io = socketio(Server);
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('send-location', (data) => {
        io.emit('receive-location', {id: socket.id, ...data});
    });

    socket.on('disconnect', () => {
        io.emit('user-disconnected', {id: socket.id});
        console.log('User disconnected');
    });
    console.log('User connected');
});

app.get('/', (req, res) => {
    res.render('index');
});




Server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});