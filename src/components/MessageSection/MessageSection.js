import React from 'react'
import { useState } from 'react'



const MessageSection = () => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
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
              <input type="text" id="search-input-email" placeholder="Email*" />
              <input type="text" id="search-input-message" placeholder="Your Message*" />
              <a className="btn-yellow" href="Subscribe.html" type="submit" onClick={handleSubmit}>Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageSection