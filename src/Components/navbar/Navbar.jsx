import React from 'react'
import { NavLink } from 'react-bootstrap'
import { useState } from 'react'
import "./navbar.css"
import Search from './../../assets/img/search.svg'
import User from './../../assets/img/user.svg'
import Lan from './../../assets/img/languag.svg'
import line from './../../assets/img/Line.svg'
import logo from './../../assets/img/Log.svg'
import logoo from './../../assets/img/Logo.svg'
import mlogo from './../../assets/img/mobile_Logo.svg'

function Navbar() {

    const [showNavbar , setShowNavbar] =useState(false);
    const handleShowNavbar = ( ) => {
        setShowNavbar(!showNavbar);  
    };
  return (
    <nav className='Navbar'>
      <div className='container'>
        {/* ********************the top part******************* */}
      <div className='icons'>
      <img src={Search} alt="search" />
      <img src={User} alt="user" />
      <img src={Lan} alt="languge" />
    </div>

    <div className='line'>
    <img src={line} alt="line" />   
    </div>
    {/* ***********************end the top part******************** */}

    {/* ************************slidbar in mobile responsiv****************************** */}
    <div className='menu' onClick={handleShowNavbar}>
        {showNavbar ? <svg  className='close' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        : 
       <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></i> 
       }
    </div>
    {/* ******************************end slidbar***************************************** */}

      {/* ****************************main navbar****************************************** */}
   <div className='main'>
   <img className='logo' src={logo} alt="logo"/>   {/***********the first logo********/}

    <div className={`nav-elements ${showNavbar && "active"}`}>
    <ul className='nav-menu'>
       <li><NavLink>الصفحة الرئيسية</NavLink></li>
       <li><NavLink>التصنيفات الرئيسية</NavLink></li>
       <li><NavLink>خدمات الوزارة</NavLink></li>
      <li><NavLink>المركز الاعلامي</NavLink></li>
      <li><NavLink>المعايير والنظم</NavLink></li>
       <li><NavLink>الوزارة</NavLink></li>
    </ul>
    <img className='logo1' src={logoo} alt='logo'/>    {/***********the second logo********/}
    <img  className='icon1' src={Search} alt="search" />  {/***********icon  in mobile ver********/}
    <div className="icon2"> {/***********icon  in mobile ver********/}
    <img src={Lan} alt="languge" />
    <img  src={User} alt="user" />
    </div>  
    
    </div>
    <img className='mlogo' src={mlogo} alt=''/>  {/***********logo in mobile ver********/}
   </div>
    {/**********************************end main nav******************************************/}
   </div>
    </nav>
 );
};

export default Navbar
