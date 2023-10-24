import React from 'react'
import showcaseImage from '../images/showcase-image.svg';
import linesShowcase from '../images/background-lines-showcase.png';
import Buttons from './Assets/Buttons';
// import TransparentBtn from './Assets/TransparentBtn';

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <div className="container">
          <div className="content">
            <h1>We provide The<br /> Best business<br /> solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Buttons text="Get Consulting" url="/services/get-consulting" />
            <Buttons text="Learn More" url="/services/consulting" />
          </div>
          <img id="white-lines-showcase" src={linesShowcase} alt="Image of white lines in the background" />
          <img id="manShowcase" src={showcaseImage} alt="A man in a suit with a tablet" />
        </div>
      </section>
  )
}

export default ShowcaseSection