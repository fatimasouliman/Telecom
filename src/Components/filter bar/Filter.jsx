import React, { useEffect, useState } from 'react'
import './filter.css'
import axios from 'axios'

function Filter() {
  const [filterData , setFilterData ] = useState()
   useEffect( () => {
    async function get(){
      await axios.get("https://unnerving-departure.000webhostapp.com/api/services").then(res => setFilterData(res.data.data))
    }
     get()
  } , [])

  return (
    <div className='filter-bar' >
      <ul className='filter' >
        {
          filterData? filterData.map(ele => [
              <li>{ele.type.ar}</li>
          ]):null
        }
      </ul>
    </div>
  )
}

export default Filter
