import React from 'react'

const MessageSection = () => {
  return (
    <div className="leave-message-information">
    <div className="container">
      <div className="background-section">
        <div className="leave-message-headline">
          <h2>Leave us a message<br/> for any information.</h2>
        </div>
        <div className="search-container">
          <form>
            <input type="text" id="search-input" placeholder="Name*" />
            <input type="text" id="search-input" placeholder="Email*" />
            <input type="text" id="search-input-message" placeholder="Your Message*" />
            <a className="btn-yellow" href="Subscribe.html">Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MessageSection