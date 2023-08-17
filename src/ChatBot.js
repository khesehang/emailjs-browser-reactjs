import React from 'react'
import { useState } from 'react'
import Chatbox from 'soul-chatbox'

const ChatBot = () => {
    const [messages, setMessages] = useState([])
    const onSend = mes => {
        setMessages([...messages, mes])
    }

    const onLeave = () => alert('leave')

    return (
        <div className='wrapper'>
            <Chatbox
                messages={messages}
                onSend={onSend}
                onLeave={onLeave}
                userInfo={{
                    nickname: 'Dennis',
                    sex: 'boy'
                }}
            />
        </div>
    )
}

export const message = {
    who: 'me' || 'you' || 'system',
    sex: 'boy' || 'girl' || 'unknown',
    nickname: '<String>',
    text: '<String>',
}

export default ChatBot