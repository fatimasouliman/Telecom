import React from 'react'
import './container.css'

function Container({data , title}) {
  return (
    <div className='ministry-container' >
      <h2>{title}</h2>
      <ul className='container-ul' >
        {
            data.map(ele => [
                <li>{ele}</li>
            ])
        }
      </ul>
    </div>
  )
}

export default Container
