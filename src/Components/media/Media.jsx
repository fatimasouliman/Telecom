import React, { useEffect, useState } from 'react'
import "./media.css"
import media from './../../assets/img/media.svg'
import arrow from '../../assets/img/more.svg'
import axios from 'axios'

function Media() {
  const [data , setData] = useState() 
  useEffect( () => {
    async function get() {
      await axios.get("https://unnerving-departure.000webhostapp.com/api/mediaCenter")
  .then(res => setData(res.data.data))
  // console.log(data)
  }
  get()
  } , [])
  return (
    <div className='cont'>
      <h1 className='title'>المركز الاعلامي</h1>
      <div className='media-center'>
 
            <div className='pic'><img src={media } alt="pic" /></div>
     
        <div className='lines'>
          {
          data? data.map(ele => [
            <h2 className='font'> {ele.title.ar} </h2>
          ]
          ):null
        }

          <img className='more-btn' src={arrow} />
        </div>
        
      </div>
    </div>
  )
}

export default Media