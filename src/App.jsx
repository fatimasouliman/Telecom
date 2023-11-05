import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import Card from './Components/card/Card';
import Services from './Components/services/Services';



function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Services />
     
     
    </div>
  )
}

export default App
