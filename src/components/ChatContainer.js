import React, { useState, useEffect } from 'react';
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit
} from 'firebase/firestore';
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
                console.log('doc: ', doc)
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages)
        });
        return () => unsubscribe;
    }, []);


    return (
        <div className='chat-container'>
            <div className='messages-wrapper'>
            {messages?.map((message) => {
                console.log('message: ', message)
                return (
                <div>
                    <p>{message}</p>
                </div>
            )})}
            </div>
            <div className='message-input-wrapper'>
            </div>
        </div>
    );
}

export default ChatContainer;