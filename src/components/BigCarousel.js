// Import necessary libraries and hooks
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// The BigCarousel component
export default function BigCarousel() {
  // index state for controlling which Carousel.Item is currently shown
  const [index, setIndex] = useState(0);

  // Function to handle selection of a Carousel.Item
  const handleSelect = (selectedIndex, e) => {
    // Update the index state when a new item is selected
    setIndex(selectedIndex);
  };

  // Return the Carousel component
  return (
    <Carousel className="big-carousel-container" activeIndex={index} onSelect={handleSelect}>
      {/* The first item in the Carousel */}
      <Carousel.Item>
        <div className='carousel-slides flex'>
            <div className='text flex flex-col items-center justify-center wines-text'>
                <div className='content'>
                    {/* Title, description, and action button for the first item */}
                    <h1 className='title'>Buy any 3 wines and get 25% OFF</h1>
                    <p className='paragraph'>Try award-winning Franschoek wines from paserana</p>
                    <button className='button px-3 py-2'>SHOP WINE</button>
                </div>
            </div>
            {/* Image for the first item */}
            <div className='image-container wines-image-container'>
                <img
                className="image d-block w-100"
                src="/assets/wines.webp"
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
      {/* The second item in the Carousel */}
      <Carousel.Item>
        <div className='carousel-slides flex'>
            <div className='text flex flex-col items-center justify-center pizza-text'>
                <div className='content'>
                    <h1 className='title'>Wood-fired pizza, ready in minutes</h1>
                    <p className='paragraph'>Add any 3 pizzas to your Meal Kit order this week and get 25% off</p>
                    <button className='button px-3 py-2'>SHOP NOW</button>
                </div>
            </div>
            <div className='image-container pizza-image-container'>
                <img
                className="image d-block w-100"
                src="/assets/pizza.webp"
                alt="Second slide"
                />
            </div>
        </div>
      </Carousel.Item>
      {/* The third item in the Carousel */}
      <Carousel.Item>
        <div className='carousel-slides flex'>
            <div className='text flex flex-col items-center justify-center bbq-text'>
                <div className='content'>
                    <h1 className='title'>A new menu is here to take care of dinner</h1>
                    <p className='paragraph'>No "What's for Dinner?" or standing in shopping queues - tasty Meal Kits delivered to your door</p>
                    <button className='button px-3 py-2'>ORDER NOW</button>
                </div>
            </div>
            <div className='image-container bbq-image-container'>
                <img
                className="image d-block w-100"
                src="/assets/bbq.webp"
                alt="Third slide"
                />
            </div>
        </div>
      </Carousel.Item>
      {/* The fourth item in the Carousel */}
      <Carousel.Item>
        <div className='carousel-slides flex'>
            <div className='text flex flex-col items-center justify-center fruits-text'>
                <div className='content'>
                    <h1 className='title'>Fresh, locally sourced produce</h1>
                    <p className='paragraph'>Get the freshest produce for the tastiest meals</p>
                    <button className='button px-3 py-2'>SHOP MARKET</button>
                </div>
            </div>
            <div className='image-container fruits-image-container'>
                <img
                className="image d-block w-100"
                src="/assets/fruits.webp"
                alt="Fourth slide"
                />
            </div>
        </div>
        </Carousel.Item>
    </Carousel>
  );
}