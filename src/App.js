import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './App.css';
import ChatBot from './chatbox/ChatBot';
import SimpleChatbot from './chatbox/SimpleChatbot';
import Dialogflow from './chatbox/Dialogflow';

function App() {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bw18g5a', 'template_vv4ukac', form.current, 'i0aBRKjP8GNlw6H8S')
      .then((result) => {
        console.log(result.text)
      })
      .catch((err) => {
        console.log(err.text)
      })

  }

  return (
    <div className="App">
      <form className='form-group' ref={form} onSubmit={handleSubmit} >
        <label>Full Name</label>
        <input type='eamil' name='name' className='form-control' placeholder='put your fullname...' required />
        <label>Email</label>
        <input type='fullname' name='email' className='form-control' placeholder='put your email...' required />
        <label>Message</label>
        <textarea rows={8} name='message' className='form-control' placeholder='put your content...' required />
        <button type='submit' className='btn' value='send' >Submit</button>
      </form>
      <ChatBot />
      <SimpleChatbot />
      <Dialogflow />
    </div>
  );
}

export default App;
