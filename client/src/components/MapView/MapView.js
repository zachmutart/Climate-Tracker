import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import EventInfo from '../EventInfo/EventInfo'
import './MapView.css'

/**
 * MapView component -
 * 
 * A simple interface to display the map with custom map marker overlays
 * on full-screen/browser scale
 * 
 */
const MapView = () => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
    const [locationInfo, setLocationInfo] = useState(null)

    // API call for climate/climate event data
    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events')
            const { events } = await response.json()
            setEventData(events)
            setLoading(false)
        }

        fetchEvents()
    }, [])

    // Return JSX for the map view component
    return (
        <div className="outerMapViewContainer">
            <Map id="bigMap" eventData={ eventData } loading={ loading } setLocationInfo={ setLocationInfo } />
            { locationInfo && <EventInfo id="mapInfo" info={locationInfo} onClick={() => setLocationInfo(null)} /> }
        </div>
    )
}

// Export the MapView component
export default MapView