import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchTelevision } from '../Redux/AppReducer/action';
import Image from 'react-bootstrap/Image'

const ProductCarousel = (props) => {
    const dispatch = useDispatch();
    const televisons = useSelector((store)=>store.AppReducer.prod_name);

    useEffect(()=>{
        dispatch(FetchTelevision)
    },[dispatch]);

    // console.log(televisons);

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

    <div className='prods1'>
        <h1 className='sec-title1'>PRICE DROP ON TELEVISIONS</h1>
        <Carousel
            className='prod-slider'
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            slidesToSlide={1}
            infinite={true}
            // autoPlay={this.props.deviceType !== responsive.mobile ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition=".5s"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {televisons.map((e)=>{
                return <div key={e.id} className='card-width'>
                    <Image src={e.img1} width='100%'/>
                    <p className='product-name'>{e.name}</p>
                    {/* <h3>{e.brand}</h3> */}
                    <p className='card-details'>Deal Price. {e.dealpricex}</p>
                    <p className='card-details'>M.R.P. {e.MRPx}</p>
                    <p className='card-details'>You Save. {e.discountx} (???{e.MRP - e.dealprice})</p>
                    <label className='offer-label'>Offer Avaialble</label>
                </div>
            })}
        </Carousel>

        
    </div>
  )
}

export default ProductCarousel;