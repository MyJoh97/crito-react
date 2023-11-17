import React from 'react';
import { Link } from 'react-router-dom';

const ArticleBoxes = ({ imageSrc, section, title, text, selection, onClick, imageStyle }) => {
  const newsDetailsUrl = `/NewsDetails/${selection}`;

  return (
    <Link to={newsDetailsUrl} className="news">
      <div className="image-container-dates">
        <img src={imageSrc} alt="" style={imageStyle} />
        <p>{section}</p>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default ArticleBoxes;


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