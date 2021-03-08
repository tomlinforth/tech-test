import React from 'react';

const sortMessage = (message, curContact) => {
    return message.to === curContact ? 'sentMessage' : 'recievedMessage'
}

const ContactMessages = (props) => {
    return (
        <ul className="messageList">
            {props.messages[0] ? props.messages.map(message => <li className={sortMessage(message,props.curContact)}>{message.body}</li>) : <i>No messages found.</i>}
        </ul>
    );
}

export default ContactMessages;



