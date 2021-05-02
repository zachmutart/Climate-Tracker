import React from 'react'
import { Icon } from '@iconify/react'
import sendIcon from '@iconify-icons/cib/telegram-plane'
import './Input.css'

/**
 * Input component -
 * 
 * The message input form for the Chat component. Has a placeholder
 * for the user text and a button to send the message. Also recognizes
 * 'Enter' keypresses for sending messages.
 * 
 */
const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input 
            className="input"
            type="text"
            placeholder="Type a message..."
            value={ message }
            onChange={ (event) => setMessage(event.target.value) }
            onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null }
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>
            <div>
                <Icon icon={ sendIcon } className="sendIcon" />
            </div>
        </button>
    </form>

)

// Export the Input component
export default Input