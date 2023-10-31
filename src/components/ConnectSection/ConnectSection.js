import React from 'react'
import BackgroundLinesShowcase from '../../images/background-lines-showcase.png';

const ConnectSection = () => {
  return (
    <>
    <section className="connect">
      <div className="container">
        <div className="home-contact">
          <p id="different-font">Home</p>
          <p>Contact</p>
        </div>
          <h2>Let’s Connect</h2>
          <img id="white-lines-showcase" src={BackgroundLinesShowcase} alt="Image of white lines in the background" />
      </div>
    </section>
    </>
  )
}

export default ConnectSection