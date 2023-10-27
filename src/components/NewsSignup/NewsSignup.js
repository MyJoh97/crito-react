import React from 'react'
import blackLines from '../../images/black-lines.svg';

function NewsSignup() {
  return (
    <div className="news-updates">
  <div className="container">
    <div className="updates-title">
      <h2>Get News Updates By Signup</h2>
    </div>
    <div className="search-container">
      <input type="text" id="search-input" placeholder="username@domain.com" />
      <a className="btn-yellow" href="Subscribe.html">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    <img src={blackLines} alt="Image of black lines" />
  </div>
</div>
  )
}

export default NewsSignup