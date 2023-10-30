import React from 'react'

const Button = ({type, url, title}) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'transparent':
        return 'btn-transparent'
      case 'btn-black':
        return 'btn-business black'
    }
  }



  return (
    <a class="btn-transparent" href={url}>{title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button