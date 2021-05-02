import React from 'react'
import onlineIcon from '../../img/online.png'
import './UserContainer.css'

/**
 * UserContainer component -
 * 
 * The active users component that appears next to the
 * Chat component on the main Chatroom view. Displays all
 * active users in a particular chatroom.
 * 
 */
const UserContainer = ({ users }) => (
        <div className="userContainer">
            { 
              users  
                ? (
                  <div>
                    <h1>Active Users:</h1>
                    <div className="activeContainer">
                        <h2>
                            { users.map(({ name }) => (
                                <div key={ name } className="activeItem">
                                    <img alt="Online" src={ onlineIcon } />
                                    { name }
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            )
            : null }
        </div>

        
)

// Export the UserContainer component
export default UserContainer