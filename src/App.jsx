import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import Card from './Components/card/Card';
import Services from './Components/services/Servi
import { Carousel } from './Components/carousel/Carousel';
import {slides} from "./data/carouselData.json"




function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Services />
     <Carousel data={slides} />

     
    </div>
  )
}

export default App
