import React from 'react'

import { Icon } from '@iconify/react'
import droughtIcon from '@iconify-icons/carbon/drought'
import dustIcon from '@iconify-icons/carbon/windy-dust'
import quakeIcon from '@iconify-icons/ri/earthquake-fill'
import fireIcon from '@iconify/icons-mdi/fire'
import floodIcon from '@iconify-icons/wi/flood'
import heatIcon from '@iconify-icons/carbon/temperature-hot'
import iceIcon from '@iconify-icons/jam/mountain-f'
import slideIcon from '@iconify-icons/ant-design/fall-outlined'
import manIcon from '@iconify-icons/carbon/location-person-filled'
import snowIcon from '@iconify-icons/map/snow'
import stormIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoIcon from '@iconify-icons/wi/volcano'
import waterIcon from '@iconify/icons-mdi/water-alert'
import './Event.css'

/**
 * Event component -
 * 
 * The component representing each individual event for the event list on the 
 * Chat view
 * 
 */
const Event = ({ event, onClick }) => {

    let icon, clss

    // determine the icon and class names of the JSX component based on the
    // event category
    switch(event.categories[0].id) {
        case "drought":
            icon = droughtIcon
            clss = "list-icon dr-icon"
            break;
        case "dustHaze":
            icon = dustIcon
            clss = "list-icon du-icon"
            break;
        case "earthquakes":
            icon = quakeIcon
            clss = "list-icon q-icon"
            break;
        case "floods":
            icon = floodIcon
            clss = "list-icon fl-icon"
            break;
        case "landslides":
            icon = slideIcon
            clss = "list-icon ls-icon"
            break;
        case "manmade":
            icon = manIcon
            clss = "list-icon m-icon"
            break;
        case "seaLakeIce":
            icon = iceIcon
            clss = "list-icon sli-icon"
            break;
        case "severeStorms":
            icon = stormIcon
            clss = "list-icon st-icon"
            break;
        case "snow":
            icon = snowIcon
            clss = "list-icon sn-icon"
            break;
        case "tempExtremes":
            icon = heatIcon
            clss = "list-icon ht-icon"
            break;
        case "volcanoes":
            icon = volcanoIcon
            clss = "list-icon vc-icon"
            break;
        case "waterColor":
            icon = waterIcon
            clss = "list-icon wt-icon"
            break;
        case "wildfires":
            icon = fireIcon
            clss = "list-icon fr-icon"
            break;
        default:
            break;
    }

    // Return JSX for the Event component
    return (
        <div className="eventWrapper" onClick={ onClick }>
            <div className="eventLeftContainer">
                <Icon icon={ icon } className={ clss } />
            </div>
            <div className="eventRightContainer">
                <h3>{ event.title }</h3>
                <p>Activity start date/time: { event.geometry[0].date }</p>
            </div>
        </div>
    )
}

// Export the Event component
export default Event