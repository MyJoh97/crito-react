import React from 'react'
import Process from '../../images/process-excellence-img.svg';
import Strategic from '../../images/strategic-planning-img.svg';
import Experience from '../../images/experience-design.svg';
import Artificial from '../../images/artificial-inteligence.svg';
import WomenAtDesk from '../../images/desk-image-women.jpeg';

function ChooseUs() {
  return (
    <>
    <div className="business-offering">
      <div className="container">
        <div className="side-left">
        <div className="section-title 2">
          <p>Why Choose Us</p>
          <h2>Why We Are The<br /> Best Business<br /> Consulting Agency</h2>
        </div>
        <div className="column-icons">
          <div className="icon-left">
            <img src={Process} alt="image of a hand that is doing thumbs up" />
            <img src={Strategic} alt="image of a hexagon" />
            <img src={Experience} alt="image of a icon" />
            <img src={Artificial} alt="image of head" />
          </div>
          <div className="offers-1">
            <strong>Process Excellence</strong>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="offers-2">
            <strong>Strategic Planning</strong>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="offers-3">
            <strong>Experience Design</strong>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="offers-4">
            <strong>Artificial Inteligence</strong>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        </div>
        <div className="desk-image">
          <div className="the-picture">
            <img src={WomenAtDesk} alt="Two women at a desk" />
          </div>
        </div>
        <div className="background-layout"></div> 
      </div>
    </div>
    </>
  )
}

export default ChooseUs