import React from 'react'
import showcaseImage from '../images/showcase-image.svg';
import linesShowcase from '../images/background-lines-showcase.png';
import Button from './Assets/Button';


const ShowcaseSection = () => {
  return (

    <section className="showcase">
        <div className="container">
          <div className="content">
            <h1>We provide The<br /> Best business<br /> solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Button type="yellow" title="Get Consulting" url="/services/get-consulting" />
            <a className="btn-no-color" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
          </div>
          <img id="white-lines-showcase" src={linesShowcase} alt="Image of white lines in the background" />
          <img id="manShowcase" src={showcaseImage} alt="A man in a suit with a tablet" />
        </div>
      </section>

  )
}

export default ShowcaseSection