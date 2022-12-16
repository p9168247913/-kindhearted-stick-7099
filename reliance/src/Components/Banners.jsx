import React from 'react'
import { Image } from 'react-bootstrap'
import macbook from '../assets/MackBook-Appliances-Small-banners.jpg'
import Printers from '../assets/Printers-Small-Banners-01-1-.jpg'
import Realme from '../assets/Realme-Smart-TV-Great-Deals-Banner.jpg'
import SmartHome from '../assets/Smart-Home-Products-Great-Deals-Banner.jpg'
import SmartWatch from '../assets/Smartwatches-Small-Banners.jpg'
import WashingM from '../assets/Washing-Machines-Small-Banners.jpg'
import Phone from '../assets/Samsung-M13-5G-Great-Deals-Banner.jpg'
import Wireless from '../assets/True-Wireless-Small-Banners.png'

const Banners = () => {
  return (
    <>
    <h1 className='sec-title1'>GREAT DEALS ON ELECTRONICS</h1>
    <div className='banners-sec'>
        <Image src={macbook} />
        <Image src={Printers} />
        <Image src={Realme} />
        <Image src={SmartHome} />
        <Image src={SmartWatch} />
        <Image src={WashingM} />
        <Image src={Phone} />
        <Image src={Wireless} />
    </div>
    </>
  )
}

export default Banners