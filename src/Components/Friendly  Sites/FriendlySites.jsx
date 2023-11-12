import React from 'react'
import './friendly.css'
import ContainerSites from '../container sites/ContainerSites'
import { sitesF } from './const/friendlySites'
function FriendlySites() {
  
  return (
    <div className='friendly-sites' >
        <h1>المواقع الصديقة</h1>
      <ContainerSites data={sitesF} />
    </div>
  )
}

export default FriendlySites
