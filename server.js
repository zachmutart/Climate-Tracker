const express = require('express'); // uses Node express
const app = express(); // instantiate app as Node express app
const path = require('path'); // uses path to link files in directory
const router = require('./router'); // uses router.js file
const PORT = process.env.PORT || 5000; // use defined port or backup 5000
const server = require('http').createServer(app); // server uses http protocol

// use socket.io library and define server with cors allowing any origin
// which avoids issues with cors
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    },
});

// Require functions from users.js file
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

/**
 * Socket.io handler for managing new socket connections.
 */
io.on('connection', (socket) => {
    /**
     * Join is emitted over the socket when a user has joined a chatroom.
     * This handler calls the addUser function which attempts to add the
     * user to the user array (in users.js).
     */
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        // If error is returned, handle the error
        if (error) return callback(error);

        // Otherwise add the newly created user to the user specified chatroom
        socket.join(user.room);

        // Emit a message over the socket that a new user has joined the room
        socket.emit('message', { user: `${user.room}-bot`, text: `Welcome to the ${user.room} chatroom, ${user.name}! :)`});
        socket.broadcast.to(user.room).emit('message', { user: `${user.room}-bot`, text: `${user.name} has joined` });

        // Update the room data so the UserContainer component can be updated
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    /**
     * sendMessage is emmitted over the socket when a user attempts to send a
     * message in a chatroom. This handler calls the getUser function which
     * attempts to find a user in the user array (in users.js) with a user id
     * matching the current socket id.
     */
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id); // get user with matching socket id

        // Emit message to all users in room
        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    /**
     * Disconnect is emitted over the socket when a user leaves the chatroom
     * (closes window, changes rooms, navigates to new page). This handler calls
     * the removeUser function which attempts to remove the user with id that
     * matches the current socket id from the users array (in users.js).
     */
    socket.on('disconnect', () => {
        const user = removeUser(socket.id); // attempt to remove user with id

        // If a value is returned to user, that means user was successfully 
        // found and removed from users array (in users.js)
        if (user) {
            // Emit message to room that user has left chatroom
            io.to(user.room).emit('message', { user: `${user.room}-bot`, text: `${user.name} has left` });
            // Update room data
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    });
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(router);

// Server listens on designated port
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));