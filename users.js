const users = []; // the users array

/**
 * Handler for server adding user to a chatroom
 */
const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase(); // simplify username

    // check if user already exists in users array
    const existingUser = users.find((user) => user.room === room && user.name === name);
    
    // handle if username already exists
    if (existingUser) {
        return { error: 'Username already exists in this room. Please ' +
                        'go back and try a different username.' };
    }

    // if not already exists, create new user with specified id, name, chatroom
    const user = { id, name, room };

    // push new user into users array
    users.push(user);

    // return user object
    return { user };
}

/**
 * Handler for server removing user from a chatroom by id
 */
const removeUser = (id) => {
    // attempt to find user by id parameter
    const index = users.findIndex((user) => user.id === id);

    // return the user removed from users array
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

/**
 * Handler for server finding user in users array by id
 */
const getUser = (id) => users.find((user) => user.id === id);

/**
 * Handler for server updating roomData for a chatroom
 * (typically after a user is added or removed from a chatroom)
 */
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

// export the handlers
module.exports = { addUser, removeUser, getUser, getUsersInRoom };