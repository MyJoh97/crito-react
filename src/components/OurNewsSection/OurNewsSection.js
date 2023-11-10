import React from 'react'
import ArticleBoxes from '../Assets/ArticleBoxes'
import NewsOne from '../../images/news-1.png';

const OurNewsSection = () => {
  return (
    <div className="news-and-articles">
      <div className="container">
        <div className="news-title">
          <h3>Our News & Articles</h3>
        </div>
        <div className="articles">
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
          <ArticleBoxes title="How To Use Digitalization In The Classroom" imageSrc={NewsOne} day="25" month="Mar" section="Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  />
        </div>
      </div>
    </div>
  )
}

export default OurNewsSection