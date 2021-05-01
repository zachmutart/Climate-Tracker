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
                    <a href={searchLink} target={"_blank"} rel="noopener noreferrer">Search Additional Info</a>
                </ul>
                <p className="detailPara">
                    Climate change affects global temperatures, weather patterns, and the environment in such a way that natural disasters - drought, dust storms, earthquakes, floods, landslides, sea/lake ice chunks from melting ice caps and glaciers, severe storms, abnormal snow events, temperature extremes, volcano eruptions, water contamination and discoloration, and wildfires - are becoming both increasingly frequent and severe. If you wish to take part in conserving the Earth's climate and mitigating worsening climate change as well as its devastating, prolonged effects, click any of the links below to learn more and/or contribute to global efforts.
                </p>
                <h3>Climate Change Mitigation Organizations:</h3>
                <ul className="orgsList">
                    <a href="https://350.org/" target={"_blank"} rel="noopener noreferrer">350.org</a>
                    <a href="https://citizensclimatelobby.org/donate/" target={"_blank"} rel="noopener noreferrer">Citizen's Climate Lobby</a>
                    <a href="https://climatenetwork.org/get-involved/support/" target={"_blank"} rel="noopener noreferrer">Climate Action Network International</a>
                    <a href="https://support.theclimategroup.org/give/280085/#!/donation/checkout" target={"_blank"} rel="noopener noreferrer">Climate Group</a>
                    <a href="https://www.rainforestcoalition.org/donate/" target={"_blank"} rel="noopener noreferrer">Coalition for Rainforest Nations</a>
                    <a href="https://www.catf.us/donate/" target={"_blank"} rel="noopener noreferrer">Clean Air Task Force</a>
                    <a href="https://itif.org/support-itif-clean-energy-innovation-policy-program" target={"_blank"} rel="noopener noreferrer">ITIF Clean Energy Innovation</a>
                    <a href="https://rainforestfoundation.org/donate/" target={"_blank"} rel="noopener noreferrer">Rainforest Foundation US</a>
                    <a href="https://climateemergencyfund.org/?form=donate" target={"_blank"} rel="noopener noreferrer">Climate Emergency Fund</a>
                    <a href="https://biomimicry.org/donate/" target={"_blank"} rel="noopener noreferrer">Biomimicry Institute</a>
                    <a href="https://www.google.com/search?q=climate%20change%20organizations" target={"_blank"} rel="noopener noreferrer">More...</a>
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