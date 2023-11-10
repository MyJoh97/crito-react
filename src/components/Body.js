import React from 'react'
import ShowcaseSection from './ShowcaseSection';
import LogosUnderShowcase from './LogosUnderShowcase/LogosUnderShowcase';
import AccountingSection from './AccountingSection/AccountingSection';
import About from './About/About';
import ServiceBoxes from './ServiceBoxes/ServiceBoxes';
import ChooseUs from './ChooseUs/ChooseUs';
import ProjectAndCases from './ProjectAndCases/ProjectAndCases';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Reviews from './Reviews/Reviews';
import ArticleAndNews from './ArticleAndNews/ArticleAndNews';
import NewsSignup from './NewsSignup/NewsSignup';



function Body() {
  return (
    <>
      
      <ShowcaseSection />
      <LogosUnderShowcase />
      <AccountingSection />
      <About />
      <ServiceBoxes />
      <ChooseUs />
      <ProjectAndCases />
      <MeetOurTeam />
      <Reviews />
      <ArticleAndNews />
      <NewsSignup />


    </>
  )
}

export default Body