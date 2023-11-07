import React from 'react'
import './footer.css'
import MenuFooter from '../menuFooter/MenuFooter'
import { map } from './const/map'
import { links } from './const/links'
import { contact } from './const/contact'
import { social } from '../social menu/const/social'
import Social from '../social menu/Social'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-header' >

                <MenuFooter data={map} />
                <MenuFooter data={links} />
                <MenuFooter data={contact} />
                
            </div>
            <div className='line-footer'>
                <span className='left'></span>
                <span className='right'></span>
            </div>
            <Social data={social} />
            <div className='down-footer' >Ministry of Communication and Technology | All rights reserved © 2023  </div>
        </div>
    )
}

export default Footer
