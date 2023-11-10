import React from 'react'

const ArticleBoxes = ({imageSrc, day, month, section, title, text}) => {
  return (
    <a className="news" href="#">
      <div className="image-container-dates">
        <img src={imageSrc} alt="picture of a woman sitting in an office beside a table" />
          <div className="dates">
            <strong>{day}</strong>
            <p>{month}</p>
          </div>
      </div>
        <p>{section}</p>
        <strong>{title}</strong>
        <p>{text}</p>
    </a>
  )
}

export default ArticleBoxes


/*
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
*/