const express = require('express');
const app = express();

const router = require('./router');
const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    },
});

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: `${user.room}-bot`, text: `Welcome to the ${user.room} chatroom, ${user.name}! :)`});
        socket.broadcast.to(user.room).emit('message', { user: `${user.room}-bot`, text: `${user.name} has joined` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: `${user.room}-bot`, text: `${user.name} has left` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));