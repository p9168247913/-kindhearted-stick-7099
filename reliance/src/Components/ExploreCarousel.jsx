import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchAppliance } from '../Redux/AppReducer/action';
import Image from 'react-bootstrap/Image'
import Laptops from '../assets/explorelaptop.jpg'
import Cameras from '../assets/explorecameras.jpg'
import AC from '../assets/exploreac.jpg'
import SmartPhone from '../assets/explorephone.jpg'
import Headsets from '../assets/exploreheadsets.jpg'
import TV from '../assets/Exploretv.jpg'
import Fridge from '../assets/explorerefrigerators.jpg'
import Watches from '../assets/explorewatch.jpg'
import Wmachines from '../assets/explorewashingmachine.jpg'
import { Button } from 'react-bootstrap';

const ExploreCarousel = (props) => {
    const dispatch = useDispatch();
    const Appliance = useSelector((store)=>store.appliances);

    useEffect(()=>{
        dispatch(FetchAppliance);
    },[dispatch]);

    // console.log(Appliance);
    const explore = [
        {   
            "id":Math.random(),
            "name":'Laptops',
            "imgsrc":Laptops
        },
        {
            "id":Math.random(),
            "name":'Air Conditioners',
            "imgsrc":AC
        },
        {
            "id":Math.random(),
            "name":'Cameras',
            "imgsrc":Cameras
        },
        {
            "id":Math.random(),
            "name":'Headsets',
            "imgsrc":Headsets
        },
        {
            "id":Math.random(),
            "name":'Smartphones',
            "imgsrc":SmartPhone
        },
        {
            "id":Math.random(),
            "name":'Televisions',
            "imgsrc":TV
        },
        {
            "id":Math.random(),
            "name":'Refrigerators',
            "imgsrc":Fridge
        },
        {
            "id":Math.random(),
            "name":'Smart Watches',
            "imgsrc":Watches
        },
        {
            "id":Math.random(),
            "name":'Washing Machines',
            "imgsrc":Wmachines
        },
    ]
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (

    <div className='explore-prods'>
        <h1 className='explore-title'>EXPLORE OUR RANGE OF PRODUCTS</h1>
        <Carousel
            className='prod-slider'
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            slidesToSlide={1}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition=".5s"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
           {explore.map(e=>{
                return <div key={e.id} className='explore-box'>
                    <Image src={e.imgsrc}/>
                    <h1 className='exp-prod-name'>{e.name}</h1>
                </div>
           })}
        </Carousel>
        <Button className='view-all'>View All</Button>
    </div>
  )
}

export default ExploreCarousel;