import React from 'react'
import { useState } from 'react'

const Forms = () => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="search-container">
      <form>
        <input type="text" id="search-input name" placeholder="Name*" value={name} onChange={ (e) => setName(e.target.value)} />
        <input type="text" id="search-input email" placeholder="Email*" />
        <input type="text" id="search-input-message" placeholder="Your Message*" />
        <a className="btn-yellow" href="Subscribe.html" type="submit" onClick={handleSubmit}>Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
      </form>
    </div>
  )
}

export default Forms



/*
        <div className="search-container">
          <form>
            <input type="text" id="search-input" placeholder="Name*" />
            <input type="text" id="search-input" placeholder="Email*" />
            <input type="text" id="search-input-message" placeholder="Your Message*" />
            <a className="btn-yellow" href="Subscribe.html">Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
          </form>
        </div>
*/