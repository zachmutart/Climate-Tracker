import React from 'react'

import './EventInfo.css'

const EventInfo = ({ info, onClick }) => {

    const title = info.title
    const searchLink = `https://www.google.com/search?q=${title.replace(" ", "%20")}`

    return (
        <div className="eventInfoWrapper">
            <div className="eventInfoInnerContainer">
                <h2>{ info.title }</h2>
                <ul className="information">
                    <li>Date/time: <strong>{ info.dateTime }</strong></li>
                    <li>Latitude:  <strong>{ info.lati }</strong></li>
                    <li>Longitude: <strong>{ info.longi }</strong></li>          
                </ul>
                <ul className="externalLink">
                    <a href={searchLink} target={"_blank"} rel="noopener noreferrer">Additional Information</a>
                </ul>
                <ul className="eonetInfo">
                    <li>ID: '{ info.id }'</li>
                    <a href={ info.link } target={"_blank"} rel="noopener noreferrer">Data Link</a>
                    <a href={ info.source } target={"_blank"} rel="noopener noreferrer">Source Link</a>
                </ul>
            </div>
            <div className="closeBtn" onClick={ onClick }><p>Return to List</p></div>
        </div>
    )
}

export default EventInfo