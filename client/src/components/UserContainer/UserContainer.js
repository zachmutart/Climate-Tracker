import React from 'react'
import onlineIcon from '../../img/online.png'
import './UserContainer.css'

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

export default UserContainer