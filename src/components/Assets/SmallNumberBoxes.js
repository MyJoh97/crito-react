import React from 'react'

const SmallNumberBoxes = ({text, color}) => {
  return (
    <div className="small-boxes">
      <div className="small-box" id={color} >{text}</div>
    </div>
  )
}

export default SmallNumberBoxes