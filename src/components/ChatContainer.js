import React, { useState, useEffect } from 'react';
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit
} from 'firebase/firestore';
import Message from './Message';
import { db } from '../firebase';

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, 'messages'),
            orderBy('createdAt'),
            limit(50));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            });
            setMessages(messages)
        });
        return () => unsubscribe;
    }, []);

    return (
        <div className='chat-container'>
            <div className='messages-wrapper'>
                {messages?.map((message) => <Message key={message.id} message={message} />)}
            </div>
            <div className='message-input-wrapper'>
            </div>
        </div>
    );
}

export default ChatContainer;