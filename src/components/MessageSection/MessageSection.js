import React from 'react'
import { useState } from 'react'



const MessageSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email + ' | ' + message)

    if (!message) {
      setError(<p className="errorMessage">Message is empty. Please type a message.</p>)
    } else {
      setError('')
    }
  }
  return (
    <div className="leave-message-information">
      <div className="container">
        <div className="background-section">
          <div className="leave-message-headline">
            <h2>Leave us a message<br/> for any information.</h2>
          </div>
          <div className="search-container">
            <form>
              <input type="text" id="search-input-name" placeholder="Name*" value={name} onChange={ (e) => setName(e.target.value)} />
              <input type="text" id="search-input-email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)} />
              <input type="text" id="search-input-message" placeholder="Your Message*" value={message} onChange={ (e) => setMessage(e.target.value)} />
              
              {error}

              <a className="btn-yellow" href="Subscribe.html" type="submit" onClick={handleSubmit}>Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageSection