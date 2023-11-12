import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './services.css'
import Filter from '../filter bar/Filter'
import Search from '../Search Bar/Search'
import axios from 'axios'

function Services() {
  const [data , setData] = useState() 
useEffect( () => {
  async function get() {
    await axios.get("https://unnerving-departure.000webhostapp.com/api/get_service_details/2")
.then(res => setData(res.data.data))
// console.log(data)
}
get()
} , [])



  return (
    <div className='services-section' >
      <h1 className='title-sec' >Services</h1>
      <div className='header' >
          <Search />
          <Filter />
      </div>
      <div className='services row' >
        {
          data? data.map(ele => [
            <Card image={ele.image} title={ele.title.ar} desc={ele.content.ar} />
          ]
          ):null
        }
      </div>

    </div>
  )
}

export default Services
