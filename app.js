const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const Server = http.createServer(app);
const io = socketio(Server);
const port = 3000;

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});




Server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});