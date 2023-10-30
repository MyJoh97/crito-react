import React from 'react'
import linesRight from '../../images/background-lines-right.png';


const ServiceBoxes = () => {
  return (
    <div className="service-boxes">
      <div className="container">
        <div className="services">
          <h6>Our Services</h6>
          <h3>We Provide The Best Service For Consulting</h3>
        </div>
        <div className="boxes">
          <div className="box1 highlight">
            <h5>Business Advice</h5>
            <p>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing elit.<br /> Officiis in nam possimus.</p>
            <a className="btn-round" href="browse-services.html"><i className="fa-light fa-arrow-right"></i></a>
          </div>
          <div className="box2 highlight">
            <h5>Startup Business</h5>
            <p>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing elit.<br /> Officiis in nam possimus.</p>
            <a className="btn-round second" href="browse-services.html"><i className="fa-light fa-arrow-right"></i></a>
          </div>
          <div className="box3 highlight">
            <h5>Financial Advice</h5>
            <p>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing elit.<br /> Officiis in nam possimus.</p>
            <a className="btn-round" href="browse-services.html"><i className="fa-light fa-arrow-right"></i></a>
          </div>
          <div className="box4 highlight">
            <h5>Risk Management</h5>
            <p>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing elit.<br /> Officiis in nam possimus.</p>
            <a className="btn-round" href="browse-services.html"><i className="fa-light fa-arrow-right"></i></a>
          </div>
        </div>
        <a className="ser-btn" href="browse-services.html">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
          <img src={linesRight} alt="image of wavy lines" />
        </div>
    </div>
  )
}

export default ServiceBoxes