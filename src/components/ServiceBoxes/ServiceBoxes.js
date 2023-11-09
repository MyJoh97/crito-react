import React from 'react'
import linesRight from '../../images/background-lines-right.png';
import BoxService from '../Assets/BoxService';



const ServiceBoxes = () => {

  return (
    <div className="service-boxes">
      <div className="container">
        <div className="services">
          <h6>Our Services</h6>
          <h3>We Provide The Best Service For Consulting</h3>
        </div>
        <div className="boxes">
          <BoxService type="box1" title="Business Advice" 
          text={[
            'Lorem, ipsum dolor sit amet',
            'consectetur adipisicing elit.',
            'Officiis in nam possimus.'
            ]}
            btnRound="btn-round" btnIcon="fa-light fa-arrow-right"
            url="/browse-services.html" />
            <BoxService type="box2" title="Business Advice" 
          text={[
            'Lorem, ipsum dolor sit amet',
            'consectetur adipisicing elit.',
            'Officiis in nam possimus.'
            ]}
            btnRound="btn-round second" btnIcon="fa-light fa-arrow-right"
            url="/browse-services.html" />
            <BoxService type="box3" title="Financial Advice" 
          text={[
            'Lorem, ipsum dolor sit amet',
            'consectetur adipisicing elit.',
            'Officiis in nam possimus.'
            ]}
            btnRound="btn-round" btnIcon="fa-light fa-arrow-right"
            url="/browse-services.html" />
            <BoxService type="box4" title="Risk Management" 
          text={[
            'Lorem, ipsum dolor sit amet',
            'consectetur adipisicing elit.',
            'Officiis in nam possimus.'
            ]}
            btnRound="btn-round" btnIcon="fa-light fa-arrow-right"
            url="/browse-services.html" />
        </div>
        <a className="ser-btn" href="browse-services.html">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
          <img src={linesRight} alt="image of wavy lines" />
        </div>
    </div>
  )
}

export default ServiceBoxes