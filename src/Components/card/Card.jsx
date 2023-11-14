import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./card.css"
import arrow from '../../assets/img/arrow.svg'
import { useNavigate } from 'react-router'
function Card({ image, title, desc }) {
  const navigate = useNavigate()

  const goTo = () => {
    navigate("detils" , {state : {
      tit: title,
      content: desc,
      img: image,
    }})
  }
  return (
    <div className="card-m col-lg-3 "  >
      <div className='image-card '>
        <img className='img-card' src={image} />
      </div>
      <div className='right-side' >
        <h2 className='card-title'>{title}</h2>
        <div className='content' >
          <NavLink onClick={ () => { goTo() }}  ><img src={arrow} /></NavLink>
          <p className='card-desc' >{desc}</p>
        </div>
      </div>


    </div>
  )
}

export default Card
