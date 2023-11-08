import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./card.css"
import arrow from '../../assets/img/arrow.svg'
function Card({ image, title, desc }) {
  return (
    <div className="card-m col-lg-3 "  >
      <div className='image-card '>
        <img className='img-card' src={image} />
      </div>
      <div className='right-side' >
        <h2 className='card-title'>{title}</h2>
        <div className='content' >
          <NavLink><img src={arrow} /></NavLink>
          <p className='card-desc' >{desc}</p>
        </div>
      </div>


    </div>
  )
}

export default Card
