import React from 'react'
import star from '../../images/star-image.png';
import pictureOne from '../../images/cassandra-warren.png';
import pictureTwo from '../../images/amanda-tulling.png';
import PictureThree from '../../images/jack-mcdogglas.png';


function Reviews() {
  return (
    <div className="all-reviews">
      <div className="container">
        <div className="square-background">
        <div className="section-title">
          <p>Testimonial</p>
          <h2>What Our Client Says</h2>
        </div>
        <div className="client-reviews">
          <div className="client-1">
            <div className="star">
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
            </div>
              <p>"Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Laudantium<br /> libero, ad dignissimos velit qui, dolorum<br /> obcaecati cum saepe nesciunt nemo<br /> eligendi numquam voluptate"</p>
              <div className="reviewer-1">
                <div className="picture-1">
                  <img src={pictureOne} alt="Picture of a woman" />

                </div>
                  <strong>Cassandra Warren</strong>
                  <p>Business Manager, Dorfus</p>
              </div>
          </div>
            <div className="client-2">
              <div className="star">
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
              </div>
                <p>"Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Laudantium<br /> libero, ad dignissimos velit qui, dolorum<br /> obcaecati cum saepe nesciunt nemo<br /> eligendi numquam voluptate"</p>
                <div className="reviewer-2">
                  <img src={pictureTwo} alt="Picture of a woman" />
                  <strong>Amanda Tulling</strong>
                  <p>Senior Developer, Square</p>
                </div>
            </div>
              <div className="client-3">
                <div className="star">
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                </div>
                  <p>"Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Laudantium<br /> libero, ad dignissimos velit qui, dolorum<br /> obcaecati cum saepe nesciunt nemo<br /> eligendi numquam voluptate"</p>
                  <div className="reviewer-3">
                    <img src={PictureThree} alt="Picture of a man" />
                    <strong>Jack McDogglas</strong>
                    <p>Key Account Manager, Gobona</p>
                  </div>
              </div>
            </div>
            <div className="center-content">
              <a className="btn-black" href="team.html">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews