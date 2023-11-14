import React from 'react'
import { useLocation } from 'react-router';
import './detils.css'

function Detils() {
    const location = useLocation();
    console.log(location)
  return (
    <div className='detils' >
      <img src={location.state.img? location.state.img : null} />
      <h1>{location.state.tit}</h1>
      <p>{location.state.content}</p>
    </div>
  )
}

export default Detils
