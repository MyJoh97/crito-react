import React from 'react'
import articleOne from '../../images/article-image-1.png';
import articleTwo from '../../images/article-image-2.png';
import articleThree from '../../images/article-image-3.png';
import articleFour from '../../images/article-image-4.png';
import Button from '.././Assets/Button';

function ProjectAndCases() {
  return (
    <section className="project-and-case">
    <div className="container">
      <div className="section-title">
        <p>Project & Case Studies</p>
        <h2>Let’s Looks Our Global Projects</h2>
      </div>
      <div className="project-and-cases">
        <a className="project" href="#">
          <img src={articleOne} alt="A mans hands reading a business paper" />
          <h3>Grow your business</h3>
          <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="project" href="#">
          <img src={articleTwo} alt="Pink Apple products on a desk" />
          <h3>Why your client needs a responsive website</h3>
          <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="project" href="#">
          <img src={articleThree} alt="Desk with office supplies" />
          <h3>Educate your employees to get better results</h3>
          <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="project" href="#">
          <img src={articleFour} alt="Laptop with Business Intelligence Insights" />
          <h3>Business Insights is a important piece of your business</h3>
          <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
      </div>
      <div className="center-content">
        <Button type="black" title="All Recent Projects" url="/services/projects" />
      </div>
    </div>
  </section>
  )
}

export default ProjectAndCases