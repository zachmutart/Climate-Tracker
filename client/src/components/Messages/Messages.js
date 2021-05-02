import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import './Messages.css'

/**
 * Messages component -
 * 
 * The container for all messages exchanged in a chatroom.
 * Maps messages in the parameters to a Message component.
 * Wrapped in a ScrollToBottom component so the most recent
 * message is always displayed.
 * 
 */
const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        { messages.map((message, i) => 
            <div key={ i }>
                <Message message={ message } name={ name } />
            </div>) }
    </ScrollToBottom>
)

// Export the Messages component
export default Messages