import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar/Navbar';
import Card from './Components/card/Card';
import Services from './Components/services/Services';
import { Carousel } from './Components/carousel/Carousel';
import {slides} from "./data/carouselData"
import Footer from './Components/Footer/Footer';
import Stander from './Components/Standers & Systems/Stander';
import MinistryAboutLow from './Components/Ministry info/MinistryAboutLow';
import RelatedSite from './Components/Related Parties/RelatedSite'
import Categories from './Components/categories/Categories';
import Media from './Components/media/Media';
import Logos from './Components/logos/Logos';
import Friendsite from './Components/friendsite/Friendsite';
import FriendlySites from './Components/Friendly  Sites/FriendlySites'





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
      <RelatedSite />
      <FriendlySites />
      <Footer />
     

     
    </div>
  )
}

export default App
