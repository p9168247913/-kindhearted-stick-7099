import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../assets/slide1.png"
import Slide2 from "../assets/slide2.png"
const Slider = () => {
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
    </Carousel>
  );
}

export default Slider;