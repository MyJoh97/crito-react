import React from 'react'
import Location from '../../images/location-icon.png'
import Call from '../../images/call-icon.png'
import Email from '../../images/email-icon.png'

const InformationSection = () => {
  return (
    <div className="contact-information">
    <div className="container">
      <div className="visit">
        <div className="icon-location">
          <img className="icon-1" src={Location} alt="picture of a location pinpoint" />
        </div>
        <strong>Visit us</strong>
        <p>Sveavägen 31<br/> 111 34 STOCKHOLM</p>
      </div>
      <div className="call">
        <div className="icon-location">
          <img className="icon-2" src={Call} alt="picture of a location pinpoint" />
        </div>
        <strong>Call us</strong>
        <p>+46 (8) 121 470 50<br/> +46 (8) 121 470 51</p>
      </div>
      <div className="email">
        <div className="icon-location">
          <img className="icon-3" src={Email} alt="picture of a location pinpoint" />
        </div>
        <strong>Email us</strong>
        <p>info@crito.com<br/> support@crito.com</p>
      </div>
    </div>
  </div>
  )
}

export default InformationSection