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
import MinistryAboutLow from './Components/Ministry info/MinistryAboutLow';

import Categories from './Components/categories/Categories';
import Media from './Components/media/Media';
import Logos from './Components/logos/Logos';
import Friendsite from './Components/friendsite/Friendsite';





function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Carousel data={slides} />
      <Categories/>
      <Services />
      <Media/>
      <Stander />
      <MinistryAboutLow />
      <Logos/>
      <Friendsite/>
      <Footer />
     

     
    </div>
  )
}

export default App
