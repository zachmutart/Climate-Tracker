import React from 'react'
import onlineIcon from '../../img/online.png'
import './InfoBar.css'

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

export default InfoBar