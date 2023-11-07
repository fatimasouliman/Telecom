import React from 'react'
import { stander } from './const/stander'
import  Card from '../card/Card'
import './stander.css'

function Stander() {
    console.log(stander)
  return (
    <div className='stander' >
      <h1 className='title-stander' >المعايير والنظم</h1>
      <div className='services row'>
      {
        stander.map(ele => [
            <Card image={ele.img} title={ele.title} desc={ele.desc} />
        ])
      }
      </div>
      
    </div>
  )
}

export default Stander
