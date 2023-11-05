import React from 'react'

import { data } from './servicesData'
import Card from '../card/Card'
import './services.css'
import Filter from '../filter bar/Filter'
import Search from '../Search Bar/Search'

function Services() {
  return (
    <div className='services-section' >
      <h1 className='title-sec' >Services</h1>
      <div className='header' >
          <Search />
          <Filter />
      </div>
      <div className='services row' >
        {
          data.map(ele => [
            <Card image={ele.img} title={ele.title} desc={ele.desc} />
          ]
          )
        }
      </div>

    </div>
  )
}

export default Services
