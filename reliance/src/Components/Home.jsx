import React from 'react'
import Footer from './Footer'
import NavbarHeader from './Navbar'
import ProductCarousel from './ProductCarousel'
import Slider from './Slider'
import WatchCarousel from './WatchCarousel'
import AppliancesCarousel from './AppliancesCarousel'
import ExploreCarousel from './ExploreCarousel'
const Home = () => {
  return (
    <div>
        <NavbarHeader/>
        <Slider/>
        <ProductCarousel/>
        <WatchCarousel/>
        <AppliancesCarousel/>
        <ExploreCarousel/>
        <Footer/>
    </div>
  )
}

export default Home