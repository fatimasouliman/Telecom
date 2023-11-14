import React, { useEffect, useState }  from 'react'
import './friendly.css'
import ContainerSites from '../container sites/ContainerSites'
// import { sitesF } from './const/friendlySites'
import axios from 'axios'

function FriendlySites() {

  const [ sitesF , setSitesF ] = useState()
  useEffect( () =>{
    async function get(){
      await axios.get("https://unnerving-departure.000webhostapp.com/api/friendlySites").then(res => setSitesF(res.data.data))
    }
    get()
} , [] )
  
  return (
    <div className='friendly-sites' >
        <h1>المواقع الصديقة</h1>
      <ContainerSites data={sitesF} />
    </div>
  )
}

export default FriendlySites
