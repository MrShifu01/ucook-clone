import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BigCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="big-carousel-container" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='carousel-slides wines flex'>
            <div className='wines-text flex flex-col items-center justify-center'>
                <div className='wines-content'>
                    <h1 className='wines-title'>Buy any 3 wines and get 25% OFF</h1>
                    <p className='wines-paragraph'>Try award-winning Franschoek wines from paserana</p>
                    <button className='wines-button px-3 py-2'>SHOP WINE</button>
                </div>
            </div>
            <div className='wines-image-container'>
                <img
                className="wines-image d-block w-100"
                src="/assets/wines.webp"
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/bbq.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/pizza.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/fruits.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
