import React from 'react'
import Footer from './Footer'
import NavbarHeader from './Navbar'
import ProductCarousel from './ProductCarousel'
import Slider from './Slider'
import WatchCarousel from './WatchCarousel'
import AppliancesCarousel from './AppliancesCarousel'
import ExploreCarousel from './ExploreCarousel'
import Banners from './Banners'
import SoundBarCarousel from './SouundBarCarousel'
const Home = () => {
  return (
    <div>
        <NavbarHeader/>
        <Slider/>
        <ProductCarousel/>
        <WatchCarousel/>
        <Banners/>
        <AppliancesCarousel/>
        <ExploreCarousel/>
        <SoundBarCarousel/>
        <Footer/>
    </div>
  )
}

export default Home