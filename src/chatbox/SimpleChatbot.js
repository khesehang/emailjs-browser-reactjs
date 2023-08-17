import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'

// all available props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontsize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4q',
}

const SimpleChatbot = () => {
    // console.log('value',previousValue);

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Speech Recognition"
                recognitionEnable={true}
                speechSynthesis={{ enable: true, lagn: 'en' }}
                steps={steps}
            />
        </ThemeProvider>
    )
}

export const steps = [
    {
        id: 'Greet',
        message: 'Hello, Welcome to our website',
        trigger: 'Ask Name',
    },
    {
        id: 'Ask Name',
        message: 'Please enter your name',
        trigger: 'waiting!',
    },
    {
        id: 'waiting!',
        user: true,
        trigger: 'Name',
    },
    {
        id: 'Name',
        message: 'Hi {previousValue}, Please select your issue',
        trigger: 'issues',
    },
    {
        id: 'issues',
        options: [
            { value: 'React', label: 'React', trigger: 'React' },
            { value: 'Angular', label: 'Angular', trigger: 'Angular' },
        ]
    },
    {
        id: 'React',
        message: 'Thanks for telling your react issue',
        end: false,
    },
    {
        id: 'Angular',
        message: 'Thanks for telling your Angular issue',
        end: false,
    }
]

export default SimpleChatbot