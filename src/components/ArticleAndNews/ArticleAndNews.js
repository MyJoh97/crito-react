import React from 'react'
import NewsOne from '../../images/news-1.png';
import NewsTwo from '../../images/news-2.png';
import NewsThree from '../../images/news-3.png';

function ArticleAndNews() {
  return (
    <div className="article-and-news">
  <div className="container">
    <div className="upper-title">
      <div className="section-title">
        <p>Article & News</p>
        <h2>Get Every Single<br /> Articles & News</h2>
      </div>
      <div className="center-content">
        <a className="btn-black" href="team.html">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
    <div className="news-section">
      <div className="news-articles">
        <a className="news" href="#">
          <div className="image-container-dates">
            <img src={NewsOne} alt="picture of a woman sitting in an office beside a table" />
            <div className="dates">
              <strong>25</strong>
              <p>Mar</p>
            </div>
          </div>
          <p>Business</p>
          <strong>How To Use Digitalization<br /> In The Classroom</strong>
          <p>Lorem, ipsum dolor sit amet consectetur<br className="paragraph-phone" /> adipisicing elit.<br /> Architecto sed hic libero.</p>
        </a>
        <a className="news" href="#">
          <div className="image-container-dates">
            <img src={NewsTwo} alt="picture of a digital screen" />
            <div className="dates">
              <strong>17</strong>
              <p>Mar</p>
            </div>
          </div>
          <p>Business</p>
          <strong>How To Implement Chat GPT<br /> In Your Projects</strong>
          <p>Lorem, ipsum dolor sit amet consectetur<br className="paragraph-phone" /> adipisicing elit.<br /> Architecto sed hic libero.</p>
        </a>
        <a className="news" href="#">
          <div className="image-container-dates">
            <img src={NewsThree} alt="picture of two books and a mobile phone stacked upon eachother on a desk" />
            <div className="dates">
              <strong>13</strong>
              <p>Mar</p>
            </div>
          </div>
          <p>Business</p>
          <strong>The Guide To Support<br /> Modern CSS Design</strong>
          <p>Lorem, ipsum dolor sit amet consectetur<br className="paragraph-phone" /> adipisicing elit.<br /> Architecto sed hic libero.</p>
        </a>
      </div>
    </div>
    <a className="circles" href="#">
      <div className="circle dark"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </a>
  </div>
</div>
  )
}

export default ArticleAndNews