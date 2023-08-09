import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './App.css';

function App() {
  // const [email, setEmail] = useState('')
  // const [fullname, setFullname] = useState('')
  // const [content, setContent] = useState('')
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
      {/*       <form className='form-group' onSubmit={handleSubmit} >
        <input type='eamil' className='form-control' placeholder='put your eamil...' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='fullname' className='form-control' placeholder='put your fullname...' value={fullname} onChange={(e) => setFullname(e.target.value)} required />
        <textarea rows={8} className='form-control' placeholder='put your content...' value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type='submit' className='btn' >Submit</button>
      </form> */}
    </div>
  );
}

export default App;
