import React from 'react'
import Event from '../Event/Event'
import spinner from '../../img/spinner.gif'
import './EventList.css'

/**
 * EventList component -
 * 
 * Maps the API eventData to a Event component and creates a scrollable
 * list of Events on the Chat view
 * 
 */
const EventList = ({ eventData, loading, setLocationInfo }) => {

    // Map the events in eventData to a Event component with relevant params
    const events = eventData.map(ev => {
        return <div className="eventContainer" key={ ev.id }>
                    <Event event={ ev } 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.link,
                            source: ev.sources[0].url,
                            dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                            longi: ev.geometry[0].coordinates[0] })}
                    />
                </div>
    })

    // Return JSX for the EventList component
    return (
        <div className="eventListContainer">
            { loading ? <img className="loading" src={ spinner } alt="Loading" /> : events }
        </div>
    )
}

// Export the EventList
export default EventList