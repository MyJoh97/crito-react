import React from 'react'
import OfficeWoman from '../../images/office-image.jpg';

const About = () => {
  return (
    <div className="about">
    
      <div className="founder">
        <div className="office-image">
          <img src={OfficeWoman} />
        </div>
          <div className="pop-up">
            <h6>Samantha Brown, <strong className="different-color">Founder</strong></h6>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
      </div>
      <div className="company-info">  
        <div className="experts">
          <strong className="same-color">About Company</strong>
          <h3>We Are Business<br /> Consulting & Credit<br /> Repair Experts</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> officiis quas assumenda esse obcaecati? Ex esse error voluptates<br /> iure vel totam eos.<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis<br /> esse quasi incidunt adipisci accusantium libero provident<br /> voluptate amet.</p>
        </div>
        <div className="buttons-line">
          <a className="btn-business black" href="business.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
          <a className="btn-business white" href="intro-video.html"><i className="fa-sharp fa-solid fa-play"></i></a>
          <p className="press-video">Intro Video</p>
        </div>
      </div>
    </div>
  )
}

export default About