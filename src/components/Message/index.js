import React from 'react';
import moment from 'moment';
import './styles.css';

const Message = ({ message }) => {
    const { name, text, createdAt } = message;
    const dateString = moment.unix(createdAt.seconds).format("hh:mm:ss DD.MM.YYYY");
    return (
        <div className='message-container'>
            <div className='message-data'>
                <p>{message.name}</p>
                <p>{dateString}</p>
            </div>
            <div className='message-text'>
                <p>{message.text}</p>
            </div>
        </div>
    );
}

export default Message;