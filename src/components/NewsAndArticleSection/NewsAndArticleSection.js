import React from 'react'
import BackgroundLinesShowcase from '../../images/background-lines-showcase.png';

const NewsAndArticleSection = () => {
  return (
    <section className="connect">
      <div className="container">
        <div className="home-contact">
          <p id="different-font">Home</p>
          <p>News</p>
        </div>
          <h2>News & Articles</h2>
          <img id="white-lines-showcase" src={BackgroundLinesShowcase} alt="Image of white lines in the background" />
      </div>
    </section>
  )
}

export default NewsAndArticleSection