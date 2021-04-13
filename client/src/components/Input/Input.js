import React from 'react'
import { Icon } from '@iconify/react'
//import sendIcon from '@iconify-icons/grommet-icons/send'
//import sendIcon from '@iconify-icons/fa/paper-plane'
//import sendIcon from '@iconify-icons/wpf/paper-plane'
import sendIcon from '@iconify-icons/cib/telegram-plane'
import './Input.css'

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

export default Input