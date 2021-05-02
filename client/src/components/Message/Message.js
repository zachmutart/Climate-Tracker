import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'


/**
 * Message component -
 * 
 * The component for the messages exchanged in the chatroom. Determines
 * if the message is sent from the current user or another user in the
 * chatroom to determine the Message component layout and class name.
 * 
 */
const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()

    // Determine if the current user sent the message
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    // Return JSX for the Message component based on who sent message
    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{ trimmedName }</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ ReactEmoji.emojify(text) }</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ ReactEmoji.emojify(text) }</p>
                    </div>
                    <p className="sentText pl-10">{ user }</p>
                </div>
            )
    )
}

// Export the Message component
export default Message