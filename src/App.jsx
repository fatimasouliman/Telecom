import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import { Carousel } from './Components/carousel/Carousel';
import {slides} from "./data/carouselData.json"



function App() {

  return (
    <div className='app'>
      <Navbar/>
     <Carousel data={slides} />
     
    </div>
  )
}

export default App
