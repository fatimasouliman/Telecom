import React, { useEffect, useState } from 'react'
// import { stander } from './const/stander'
import  Card from '../card/Card'
import './stander.css'
import axios from 'axios'

function Stander() {
  const [ stander , setStander ] = useState()
  useEffect( () =>{
        async function get(){
          await axios.get("https://unnerving-departure.000webhostapp.com/api/criterias").then(res => setStander(res.data.data))
        }
        get()
  } , [] )

  return (
    <div className='stander' >
      <h1 className='title-stander' >المعايير والنظم</h1>
      <div className='services row'>
      {
        stander? stander.map(ele => [
            <Card image={ele.image} title={ele.title.ar} desc={ele.content.ar} />
        ]):null
      }
      </div>
      
    </div>
  )
}

export default Stander
