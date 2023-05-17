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
      <Carousel.Item>
        <div className='carousel-slides pizza flex'>
            <div className='pizza-text flex flex-col items-center justify-center'>
                <div className='pizza-content'>
                    <h1 className='pizza-title'>Wood-fired pizza, ready in minutes</h1>
                    <p className='pizza-paragraph'>Add any 3 pizzas to your Meal Kit order this week and get 25% off</p>
                    <button className='pizza-button px-3 py-2'>SHOP NOW</button>
                </div>
            </div>
            <div className='pizza-image-container'>
                <img
                className="pizza-image d-block w-100"
                src="/assets/pizza.webp"
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-slides bbq flex'>
            <div className='bbq-text flex flex-col items-center justify-center'>
                <div className='bbq-content'>
                    <h1 className='bbq-title'>A new menu is here to take care of dinner</h1>
                    <p className='bbq-paragraph'>No "What's for Dinner?" or standing in shopping queues - tasty Meal Kits delivered to your door</p>
                    <button className='bbq-button px-3 py-2'>ORDER NOW</button>
                </div>
            </div>
            <div className='bbq-image-container'>
                <img
                className="bbq-image d-block w-100"
                src="/assets/bbq.webp"
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-slides fruits flex'>
            <div className='fruits-text flex flex-col items-center justify-center'>
                <div className='fruits-content'>
                    <h1 className='fruits-title'>Fresh, locally sourced produce</h1>
                    <p className='fruits-paragraph'>Get the freshest produce for the tastiest meals</p>
                    <button className='fruits-button px-3 py-2'>SHOP MARKET</button>
                </div>
            </div>
            <div className='fruits-image-container'>
                <img
                className="fruits-image d-block w-100"
                src="/assets/fruits.webp"
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}
