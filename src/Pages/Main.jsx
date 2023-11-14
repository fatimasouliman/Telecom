import React from 'react'
import { Carousel } from '../Components/carousel/Carousel'
import Categories from '../Components/categories/Categories'
import Services from '../Components/services/Services'
import Media from '../Components/media/Media'
import Stander from '../Components/Standers & Systems/Stander'
import MinistryAboutLow from '../Components/Ministry info/MinistryAboutLow'
import RelatedSite from '../Components/Related Parties/RelatedSite'
import FriendlySites from '../Components/Friendly  Sites/FriendlySites'
import {slides} from "../data/carouselData.json"

function Main() {
  return (
    <>
      <Carousel data={slides} />
      <Categories />
      <Services />
      <Media />
      <Stander />
      <MinistryAboutLow />
      <RelatedSite />
      <FriendlySites />
    </>
  )
}

export default Main
