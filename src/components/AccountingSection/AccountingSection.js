import React from 'react'
import businessIcon from '../../images/business-icon.svg';
import startup from '../../images/startup-business-icon.svg';
import financialIcon from '../../images/financial-advice-icon.svg';
import riskIcon from '../../images/risk-management-icon.svg';


function AccountingSection() {
  return (

      <div className="left-box">
        <div className="accounting">
          <h4>Feautures</h4>
          <h2>Our Accounting is trusted by thousand of companies</h2>
          <a className="btn-yellow adv" href="accounting.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
          <div className="container right-side">
            <div className="business info">
              <img src={businessIcon} alt="Hand shaking icon" />
              <h5>Business Advice</h5>
              <p className="break-text">Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>
            <div className="business info">
              <img src={startup} alt="lightbuld icon" />
              <h5>Startup Business</h5>
              <p className="break-text">Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>
            <div className="business info">
              <img src={financialIcon} alt="bank icon" />
              <h5>Financial Advice</h5>
              <p className="break-text">Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>
            <div className="business info">
              <img src={riskIcon} alt="box icon" />
              <h5>Risk Management</h5>
              <p className="break-text">Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>
          </div>
      </div>

  )
}

export default AccountingSection