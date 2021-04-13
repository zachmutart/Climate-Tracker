import React, { useState } from 'react'
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
import './Markers.css'
    
const Map = ({ eventData, center, zoom }) => {

    // the comment below disables the React warning for an assigned but unused variable
    // temporarily while under development

    // eslint-disable-next-line
    const [ locationInfo, setLocationInfo ] = useState(null)

    const TOK = process.env.REACT_APP_TOK

    const markers = eventData.map(ev => {
        switch (ev.categories[0].id) {
            case "drought":
                return <DroughtMarker 
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "dustHaze":
                return <DustMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "earthquakes":
                return <EarthquakeMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "floods":
                return <FloodMarker 
                        key={ev.id}
                        lat={ev.geometry[0].coordinates[1]} 
                        lng={ev.geometry[0].coordinates[0]} 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                            dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                            longi: ev.geometry[0].coordinates[0] })} />

            case "landslides":
                return <LandslideMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "manmade":
                return <ManmadeMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "seaLakeIce":
                return <IceMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "severeStorms":
                const stormPath = [];
                for (let i = 0; i < ev.geometry.length; i++) {
                    stormPath.push(
                        <StormMarker
                            key={ev.id + i}
                            lat={ev.geometry[i].coordinates[1]} 
                            lng={ev.geometry[i].coordinates[0]} 
                            onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                                dateTime: ev.geometry[i].date, lati: ev.geometry[i].coordinates[1],
                                longi: ev.geometry[i].coordinates[0] })} /> 
                    )
                }
                return stormPath;

            case "snow":
                return <SnowMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "tempExtremes":
                return <HeatMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "volcanoes":
                if (ev.geometry[0].type !== "Polygon") {
                    return <VolcanoMarker
                        key={ev.id}
                        lat={ev.geometry[0].coordinates[1]} 
                        lng={ev.geometry[0].coordinates[0]} 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                            dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                            longi: ev.geometry[0].coordinates[0] })} />
                }
                else {
                    // dealing with a polygon type data -- need to investigate how to parse and represent
                    return null;
                }

            case "waterColor":
                return <WaterMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                        longi: ev.geometry[0].coordinates[0] })} />

            case "wildfires":
                return <FireMarker
                    key={ev.id}
                    lat={ev.geometry[0].coordinates[1]} 
                    lng={ev.geometry[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometry[0].date, lati: ev.geometry[0].coordinates[1],
                     longi: ev.geometry[0].coordinates[0] })} />

            default:
                return null
        }
    })

    // return the GoogleMapReact component with default properties defined below
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: TOK }}
                center={ center }
                zoom={ zoom }
                options={{
                    streetViewControl: false,
                    draggable: true,
                    zoomControlOptions: { 
                        position: 7 
                    },
                    keyboardShortcuts: true,
                    scaleControl: true,
                    scrollwheel: true,
                    mapTypeControl: true,
                    restriction: {
                        latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
                    },
                }}
            >

                { markers }

            </GoogleMapReact>

        </div>
    );

}

Map.defaultProps = {
    center: {
        lat: 38.5,
        lng: -95.5  // these values center on North America to start
    },
    zoom: 1
}

export default Map