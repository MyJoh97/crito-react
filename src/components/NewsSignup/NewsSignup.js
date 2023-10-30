import React from 'react'
import blackLines from '../../images/black-lines.svg';
import Button from '../Assets/Button';

function NewsSignup() {
  return (
    <div className="news-updates">
  <div className="container">
    <div className="updates-title">
      <h2>Get News Updates By Signup</h2>
    </div>
    <div className="search-container">
      <input type="text" id="search-input" placeholder="username@domain.com" />
      <Button type="yellow" title="Subscribe" url="/login" />
    </div>
    <img src={blackLines} alt="Image of black lines" />
  </div>
</div>
  )
}

export default NewsSignup