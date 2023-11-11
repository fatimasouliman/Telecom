import React from 'react'
import { sitesR } from './const/relatedSites'
import ContainerSites from '../container sites/ContainerSites'
import "./relatedsite.css"

function RelatedSite() {
  return (
    <div className='related-site' >
      <h1 className='title-related-site' >الجهات ذات الصلة</h1>
      <ContainerSites data={sitesR} />
    </div>
  )
}

export default RelatedSite
