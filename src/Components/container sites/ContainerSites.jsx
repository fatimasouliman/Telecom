import React from 'react'
import './containerSites.css'

function ContainerSites({data}) {
  return (
    <div className='container-sites' >
      {
        data?data.map(ele => [
            <div className="site" >
                <div className="container-img">
                <img className='img-site' src={ele.image}/>
                <h1 className='name-img' >{ele.name.ar}</h1>
                </div>   
                <span className='line-site' ></span>
            </div>
        ]) :null
      }
    </div>
  )
}

export default ContainerSites
