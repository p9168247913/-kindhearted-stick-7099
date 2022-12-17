import React from 'react'
import NavbarHeader from './Navbar'
import Footer from './Footer'
import ShopSlider from './ShopSlider'
import ShopArea from './ShopArea'

const ProductShop = () => {
  return (
    <div>
        <NavbarHeader/>
        <ShopSlider/>
        <ShopArea/>
        <Footer/>
    </div>
  )
}

export default ProductShop