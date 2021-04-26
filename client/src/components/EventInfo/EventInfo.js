import React from 'react'
import * as AiIcons from 'react-icons/ai'
import './EventInfo.css'


/**
 * EventInfo component -
 * 
 * An information display component with pertinent event-specific information
 * as well as buttons to external links for additional information, sources,
 * etc
 * 
 */
const EventInfo = ({ info, onClick }) => {
    
    // create search link URL
    const searchLink = `https://www.google.com/search?q=${info.title.replace(" ", "%20")}`

    // Return JSX for the event information component
    return (
        <div className="eventInfoWrapper">
            <div className="closeBtn" onClick={ onClick }><AiIcons.AiOutlineClose /></div>
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
        </div>
    )
}

// Export the EventInfo component
export default EventInfo