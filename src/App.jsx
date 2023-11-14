import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router';


function App() {

  return (
    <div className='app'>

      <Navbar/>
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
