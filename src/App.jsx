import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import Card from './Components/card/Card';
import Services from './Components/services/Services';
import { Carousel } from './Components/carousel/Carousel';
import {slides} from "./data/carouselData.json"
import Footer from './Components/Footer/Footer';
import Stander from './Components/Standers & Systems/Stander';




function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Carousel data={slides} />
      <Services />
      <Stander />
      <Footer />
     

     
    </div>
  )
}

export default App
