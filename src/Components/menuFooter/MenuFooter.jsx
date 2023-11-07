import React from 'react'
import './menu.css'

function MenuFooter({data}) {

  return (
    <div>
      <ul className='menu-footer'>
        {
            data.map(ele => [
                <li className='title-footer' > {ele.title? ele.title : null}</li>,
                ele.elements.map(ele => [
                    <li> {ele.icon? <img className='icon' src={ele.icon} /> : null }  {ele.text}</li>
                ] )
            ])
        }
      </ul>
    </div>
  )
}
import './menu.css'

export default MenuFooter
