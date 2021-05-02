import React from 'react'
import onlineIcon from '../../img/online.png'
import './InfoBar.css'


/**
 * InfoBar component -
 * 
 * The header bar for the Chat component displaying the user-selected
 * chatroom and the link to change chat rooms.
 * 
 */
const InfoBar = ({ room }) => (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={ onlineIcon } alt="online" />
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/join">
                    Change Room
                </a>
            </div>
        </div>
)

// Export the InfoBar
export default InfoBar