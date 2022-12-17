import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../assets/ShopSliderImgs/shopslide1.jpg"
import Slide2 from "../assets/ShopSliderImgs/shopslide2.jpg"
import Slide3 from "../assets/ShopSliderImgs/shopslide3.jpg"
import Slide4 from "../assets/ShopSliderImgs/shopslide4.jpg"

const ShopSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide4}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ShopSlider;