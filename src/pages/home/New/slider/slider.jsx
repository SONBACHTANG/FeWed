import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from "../../../../../public/assets/banner2.png";
// import { Link } from 'react-router-dom';
import './slider.css';

function HomeSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} className='home-slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          {/* <Button as={Link} to='/shop' className="slider-button">Read more</Button>  */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* <Button as={Link} to='/shop' className="slider-button">Read more</Button>  */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          {/* <Button as={Link} to='/shop' className="slider-button">Read more</Button>  */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;
