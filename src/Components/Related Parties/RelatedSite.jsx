import React, { useEffect, useState } from 'react'
// import { sitesR } from './const/relatedSites'
import ContainerSites from '../container sites/ContainerSites'
import "./relatedsite.css"
import axios from 'axios'

function RelatedSite() {
  const [ sitesR , setSitesR ] = useState()
  useEffect( () =>{
    async function get(){
      await axios.get("https://unnerving-departure.000webhostapp.com/api/relatedSites").then(res => setSitesR(res.data.data))
    }
    get()
} , [] )
  return (
    <div className='related-site' >
      <h1 className='title-related-site' >الجهات ذات الصلة</h1>
      <ContainerSites data={sitesR} />
    </div>
  )
}

export default RelatedSite
