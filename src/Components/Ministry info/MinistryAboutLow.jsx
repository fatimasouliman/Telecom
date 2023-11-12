import React from 'react'
import Container from '../About and law Ministry/Container'
import { about } from './const/about'
import { law } from './const/law'
import './ministry.css'

function MinistryAboutLow() {
  return (
    <div className='ministry'>
      
      <Container data={law} title="قوانين الوزارة" />
      <Container data={about} title="عن الوزارة" />
    </div>
  )
}

export default MinistryAboutLow
