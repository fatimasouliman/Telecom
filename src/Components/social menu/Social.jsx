import React from 'react'
import './social.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';

function Social({ data }) {
    return (
        <div>
            <ul className='social'>
                <li><a href="#"><RiTwitterXFill size={20} /></a></li>
                <li><a href="#"><AiFillLinkedin size={23} /></a></li>
                <li><a href="#"><AiFillInstagram size={23} /></a></li>
                <li><a href="#"><BsFacebook size={20} /></a></li>
                
                
                
            </ul>
        </div>
    )
}

export default Social
