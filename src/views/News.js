import React from 'react'
import Header from '../components/Header';
import NewsBody from '../components/NewsBody'
import Footer from '../components/Footer';
import NewsSignup from '../components/NewsSignup/NewsSignup'

const News = () => {
  return (
    <>
    <Header />
    <NewsBody />
    <NewsSignup />
    <Footer />
    </>
  )
}

export default News