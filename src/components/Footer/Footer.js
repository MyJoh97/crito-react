import React from 'react'
import logoConsulting from '../../images/logo-consulting.svg';
import linesFooter from '../../images/lines-footer.svg';

function Footer() {
  return (
    <footer>
  <div className="container">
  <div className="center-section">
    <div className="logotype-consulting">
      <a href="index.html">
        <img src={logoConsulting} alt="crito logotype" />
      </a>
      <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Placeat obcaecati<br /> voluptas voluptates! Voluptates laborum<br /> nam ratione minus necessitatibus, iure<br /> praesentium.</p>
    </div>
    <div className="company-info">
      <div className="company-section">
        <h5>Company</h5>
        <nav>
          <a href="about.html">About</a>
          <a href="features.html">Features</a>
          <a href="works.html">Works</a>
          <a href="career.html">Career</a>
        </nav>
      </div>
      <div className="company-section">
        <h5>Help</h5>
        <nav>
          <a href="support.html">Customer Support</a>
          <a href="delivery.html">Delivery Details</a>
          <a href="terms-and-conditions.html">Terms & Conditions</a>
          <a href="policy.html">Privacy Policy</a>
        </nav>
      </div>
      <div className="company-section">
        <h5>Resources</h5>
        <nav>
          <a href="ebooks.html">Free eBooks</a>
          <a href="development-tutorial.html">Development Tutorial</a>
          <a href="blog.html">How to - Blog</a>
          <a href="youtube-playlist.html">Youtube Playlist</a>
        </nav>
      </div>
      <div className="company-section">
        <h5>Link</h5>
        <nav>
          <a href="ebooks.html">Free eBooks</a>
          <a href="development-tutorial.html">Development Tutorial</a>
          <a href="blog.html">How to - Blog</a>
          <a href="youtube-playlist.html">Youtube Playlist</a>
        </nav>
      </div>
    </div>
  </div>
    <img id="wavy-lines" src={linesFooter} alt="Image of wavy lines" />
  </div>
  <div className="bottom">
    <div className="copyright-section">
      <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
    </div>
    <div className="socialmedia-bar"><a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
      <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
      <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
  </div>
</footer>
  )
}

export default Footer