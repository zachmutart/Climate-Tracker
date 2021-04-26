import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import './Join.css'

/**
 * Join component -
 * 
 * The main interface for the chatroom join page. Allows user to select a
 * username and chatroom and navigates to that url
 *  
 */
const Join = ( ) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

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

    // Return JSX for the Join component
    return (
        <div className="joinOuterContainer">
            <div className="innerTopContainer">
                <div className="joinWrapper">
                    <h1 className="heading">ClimateCord</h1>
                    <h3 className="heading2">Join a room to start collaborating</h3>
                    <div>
                        <input 
                            placeholder="Username" 
                            className="joinInput mt-20"
                            type="text"
                            onChange={ (event) => setName(event.target.value) } />
                    </div>
                    <div>
                        <select defaultValue={'DEFAULT'}
                            className="joinInput mt-20"
                            onChange={ (event) => setRoom(event.target.value) } >
                            <option value="DEFAULT" disabled>Select a room...</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Coastline Erosion">Coastline Erosion</option>
                            <option value="Deforestation">Deforestation</option>
                            <option value="Drought">Drought</option>
                            <option value="Emissions">Emissions</option>
                            <option value="Eutrophication">Eutrophication</option>
                            <option value="Extreme Weather">Extreme Weather</option>
                            <option value="Global Warming">Global Warming</option>
                            <option value="Cryosphere">Cryosphere</option>
                            <option value="Sea Levels">Sea Levels</option>
                            <option value="Soil Erosion">Soil Erosion</option>
                            <option value="Wildfires">Wildfires</option>
                        </select>
                    </div>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null}
                            to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">Join the Conversation</button>
                    </Link>
                </div>
            </div>
            <div className="innerBottomContainer">
                <Map eventData={ eventData } loading={ loading } />
            </div>
        </div>
    )
}

// Export the Join component
export default Join