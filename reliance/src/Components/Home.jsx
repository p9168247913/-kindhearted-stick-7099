import React from 'react'
import Footer from './Footer'
import NavbarHeader from './Navbar'
import ProductCarousel from './ProductCarousel'
import Slider from './Slider'
const Home = () => {
  return (
    <div>
        <NavbarHeader/>
        <Slider/>
        <ProductCarousel/>
        <Footer/>
    </div>
  )
}

export default Home