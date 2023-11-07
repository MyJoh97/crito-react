import React from 'react'
import { useState } from 'react'



const MessageSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    
    const user = {name, email, message}
    const json = JSON.stringify(user)
    
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: json
    })

    switch (result.status) {
      case 200:
        console.log('The message has been sent.')
        break;
      case 400:
        setErrorMessage('Please fill out all the required fields.')
      default:
    }
  };

 

  return (
    <div className="leave-message-information">
      <div className="container">
        <div className="background-section">
          <div className="leave-message-headline">
            <h2>Leave us a message<br/> for any information.</h2>
          </div>
          <div className="search-container">
            <form onSubmit={handleSubmit} noValidate>
              <p className="errorMessage">{errorMessage}</p>
              <input type="text" id="search-input-name" placeholder="Name*" value={name} onChange={ (e) => setName(e.target.value)} />
              <input type="text" id="search-input-email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)} />
              <input type="text" id="search-input-message" placeholder="Your Message*" value={message} onChange={ (e) => setMessage(e.target.value)} />
              
            

              <a className="btn-yellow" href="Subscribe.html" type="submit" onClick={handleSubmit}>Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageSection