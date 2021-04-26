import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import UserContainer from '../UserContainer/UserContainer'
import Map from '../Map/Map'
import EventList from '../EventList/EventList'
import EventInfo from '../EventInfo/EventInfo'
import sendAudioURL from '../../sounds/sent.mp3'
import receiveAudioURL from '../../sounds/received.mp3'
import errorAudioURL from '../../sounds/error.mp3'
import './Chat.css'

let socket
let sendAudio = new Audio(sendAudioURL)
let receiveAudio = new Audio(receiveAudioURL)
let errorAudio = new Audio(errorAudioURL)
let playPromise;

sendAudio.volume = 0.2
receiveAudio.volume = 0.1
errorAudio.volume = 0.5


/**
 * Chat component -
 * 
 * The main interface for the chatroom page. Handles all chatroom server
 * socket interaction, and displays a Map overlayed with custom markers
 * along with a list of events pertaining to each marker on the map
 * 
 */
const Chat = ({ location }) => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
    const [locationInfo, setLocationInfo] = useState(null)
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    
    // server endpoint
    const ENDPOINT = 'https://climate-tracker.herokuapp.com'

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

    // Once the chat loads after user join, creates the user instance over the socket
    useEffect(() => {
        // query the URL for username and chatroom
        const { name, room } = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        // instantiate the socket
        socket = io(ENDPOINT)

        // Emit to the listener on the server of the new user, check for errors returned
        socket.emit('join', { name: name, room: room }, (error) => {
            if (error) {
                playPromise = errorAudio.play()
                // general audio error handling for Chrome
                if (playPromise) {
                    playPromise.catch((e) => {
                        console.log(e)
                    }).then(() => {

                    })
                }
                alert(error)
                window.location.href = '/join'
            }
        })

        // Disconnects socket upon user exiting chatroom
        return () => {
            socket.disconnect()
            socket.off()
        }
    }, [ENDPOINT, location.search])

    // Upon a message sent and/or received, add to list of messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message])
            playPromise = receiveAudio.play()
            // general audio error handling for Chrome
            if (playPromise) {
                playPromise.catch((e) => {
                    console.log(e)
                }).then(() => {
                    
                })
            }
        })

        // Upon an update to the room data (users join/leave), update users list
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
    }, [])

    // Handler for sending messages
    const sendMessage = (event) => {
        event.preventDefault();


        if (message) {
            // Emit to the listener on the server that a message is being sent
            // and send the message, then reset message variable to null
            socket.emit('sendMessage', message, () => setMessage(''))
            playPromise = sendAudio.play()
            // general audio error handling for Chrome
            if (playPromise) {
                playPromise.catch((e) => {
                    console.log(e)
                }).then(() => {
                    
                })
            }
        }
    }

    // Return JSX for the Chat component
    return (
        <div className="outerChatContainer">
            <div className="innerLeftContainer">
                <Map eventData={ eventData } loading={ loading } setLocationInfo={ setLocationInfo } />
            </div>
            <div className="innerRightContainer">
                <div className="chatWrapper">
                    <UserContainer users={ users } />
                    <div className="innerChatContainer">
                        <InfoBar room={ room } />
                        <Messages messages={ messages } name={ name } />
                        <Input message={ message } setMessage={ setMessage } sendMessage={ sendMessage } />
                    </div>
                </div>
                <div className="infoBoxWrapper">
                    { locationInfo 
                    ? <EventInfo info={ locationInfo } onClick={() => setLocationInfo(null)} /> 
                    : <EventList eventData={ eventData } loading={ loading } setLocationInfo={ setLocationInfo }/>
                    }
                </div>
            </div>
        </div>
    )
}

// Export the Chat component
export default Chat