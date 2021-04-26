import React from 'react'
import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import SnowMarker from './SnowMarker'
import HeatMarker from './HeatMarker'
import StormMarker from './StormMarker'
import FloodMarker from './FloodMarker'
import IceMarker from './IceMarker'
import VolcanoMarker from './VolcanoMarker'
import DroughtMarker from './DroughtMarker'
import DustMarker from './DustMarker'
import EarthquakeMarker from './EarthquakeMarker'
import LandslideMarker from './LandslideMarker'
import ManmadeMarker from './ManmadeMarker'
import WaterMarker from './WaterMarker'
import spinner from '../../img/spinner.gif'
import './Markers.css'

/**
 * Map component -
 * 
 * Takes in parameters from the parent component, processes that data
 * to create custom map markers, and creates the Map using Google Maps
 * API on which the custom map markers are overlayed.
 * 
 */
const Map = ({ eventData, center, zoom, loading, setLocationInfo }) => {

    // Each event in eventData is mapped to a custom map marker based on the id
    const markers = eventData.map(ev => {
        switch (ev.categories[0].id) {
            case "drought":
                return <DroughtMarker 
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "dustHaze":
                return <DustMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "earthquakes":
                return <EarthquakeMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "floods":
                return <FloodMarker 
                        key={ev.id}
                        lat={ev.geometry[0].coordinates[1]} 
                        lng={ev.geometry[0].coordinates[0]} 
                        onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                            title: ev.title, 
                            link: ev.link,
                            source: ev.sources[0].url,
                            dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                            longi: ev.geometry[0].coordinates[0] }) : null} />

            case "landslides":
                return <LandslideMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "manmade":
                return <ManmadeMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "seaLakeIce":
                return <IceMarker
                    key={ev.id}
                    lat={ev.geometry[ev.geometry.length - 1].coordinates[1]} 
                    lng={ev.geometry[ev.geometry.length - 1].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[ev.geometry.length - 1].coordinates[1],
                        longi: ev.geometry[ev.geometry.length - 1].coordinates[0] }) : null} />

            case "severeStorms":
                // a storm will have various points representing its path, so loop through
                // them and create a marker for each point
                const stormPath = [];
                for (let i = 0; i < ev.geometry.length; i++) {
                    stormPath.push(
                        <StormMarker
                            key={ev.id + i}
                            lat={ev.geometry[i].coordinates[1]} 
                            lng={ev.geometry[i].coordinates[0]} 
                            onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                                title: ev.title, 
                                link: ev.link,
                                source: ev.sources[0].url,
                                dateTime: ev.geometry[i].date, lati: ev.geometry[i].coordinates[1],
                                longi: ev.geometry[i].coordinates[0] }) : null} /> 
                    )
                }
                return stormPath;

            case "snow":
                return <SnowMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "tempExtremes":
                return <HeatMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "volcanoes":
                if (ev.geometry[0].type !== "Polygon") {
                    return <VolcanoMarker
                        key={ev.id}
                        lat={ev.geometry[0].coordinates[1]} 
                        lng={ev.geometry[0].coordinates[0]}
                        onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                            title: ev.title, 
                            link: ev.link,
                            source: ev.sources[0].url,
                            dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                            longi: ev.geometry[0].coordinates[0] }) : null} />
                }
                else {
                    // polygon geometry, need to figure out a way to parse
                    return null;
                }

            case "waterColor":
                return <WaterMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            case "wildfires":
                return <FireMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={setLocationInfo ? () => setLocationInfo({ id: ev.id, 
                        title: ev.title, 
                        link: ev.link,
                        source: ev.sources[0].url,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] }) : null} />

            default:
                return null
        }
    })
    const TOK = 'AIzaSyClkr13c3ZAqlzA37j3U5HgudR-XbNQsEE'

    // return the GoogleMapReact component with default properties defined below
    return (
        <div className="map">

            { loading ? <img className="load" src={ spinner } alt="Loading" /> : null }

            <GoogleMapReact
                bootstrapURLKeys={{ key: TOK }}
                center={ center }
                zoom={ zoom }
                options={{
                    streetViewControl: false,
                    draggable: true,
                    zoomControlOptions: { 
                        position: 3 
                    },
                    keyboardShortcuts: true,
                    scaleControl: true,
                    scrollwheel: true,
                    mapTypeControl: true,
                    restriction: {
                        latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
                    },
                }}
                onClick={ () => setLocationInfo(null) }
            >

                { loading ? null : markers}

            </GoogleMapReact>

        </div>
    )
}

// default properties for the Map component
Map.defaultProps = {
    center: {
        lat: 31,
        lng: -98  // these values center on North America to start
    },
    zoom: 1
}

// export the Map component
export default Map