import React from 'react'
import MemberOne from '../../images/member-1.png';
import MemberTwo from '../../images/member-2.png';
import MemberThree from '../../images/member-3.png';
import MemberFour from '../../images/member-4.png';


function MeetOurTeam() {
  return (
    <>
    <div className="meet-our-team">
      <div className="container">
        <div className="section-title">
          <p>Meet Our Team</p>
          <h2>Experience Team Members</h2>
        </div>
        <div className="center-content">
          <a className="btn-black" href="team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="team-img">
          <div className="member-1">
            <img src={MemberOne} alt="Picture of a woman who is the chef operation officer" />
            <strong>Kristine Palmer</strong>
            <p>Chef Operation Officer</p>
          </div>
          <div className="member-2">
            <img src={MemberTwo} alt="Picture of a man who is a senior consultant" />
            <strong>Mark Aubri</strong>
            <p>Senior Consultant</p>
          </div>
          <div className="member-3">
            <img src={MemberThree} alt="Picture of a woman who is a senior consultant" />
            <strong>Kimberly Hansen</strong>
            <p>Senior Consultant</p>
          </div>
          <div className="member-4">
            <img src={MemberFour} alt="Picture of a man who is a senior tech consultant" />
            <strong>Justin Willoman</strong>
            <p>Senior Tech Consultant</p>
          </div>
        </div>
        <a className="circles" href="#">
          <div className="circle"></div>
          <div className="circle dark"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </a>
      </div>
    </div>
    </>
  )
}

export default MeetOurTeam