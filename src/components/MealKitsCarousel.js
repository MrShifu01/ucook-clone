// Importing the necessary components
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import mealkits from '../mealkits'
import {Stack} from 'react-bootstrap'

export default function MealKitsCarousel() {
  // Initialize state for the active index of the carousel
  const [index, setIndex] = useState(0);

  // Handler function for carousel slide selection
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Divide meal kits into two arrays for separate carousel items
  const mealkitChunkOne = [];
  const mealkitChunkTwo = [];
  for (let i = 0; i < mealkits.length; i++) {
    if (i < 3) {
      mealkitChunkOne.push(mealkits[i])
    } else {
      mealkitChunkTwo.push(mealkits[i])
    }
  }

  return (
    <div className="mealkit-carousel-container">
    <h2 className='mealkit-title text-center p-5'>Whatever you're craving, we've got you covered</h2>
    <Carousel 
    activeIndex={index} 
    onSelect={handleSelect}
    interval={null}  // Disable automatic carousel slide transitions
    >
      <Carousel.Item className="flex">
        <Stack
            direction="horizontal"
            className="justify-content-center align-items-center"
            gap={3}
        >
          {/* Map over first chunk of mealkits */}
          {mealkitChunkOne.map((item) =>
                  <div key={item.id} className="mealkit-card bg-white">
                      <img className="mealkit-card-img-top" src={item.image} alt={item.alt}/>
                      <div className="mealkit-card-body px-6">
                          <h5 className="mealkit-card-title text-center pt-3 pb-6">{item.name}</h5>
                          <p className="mealkit-card-text text-center">{item.text}</p>
                          <p className="mealkit-link text-center"><a className='no-underline text-blue-800' href="/">{item.link}</a></p>
                      </div>
                  </div>
          )}
        </Stack>
        </Carousel.Item>
      <Carousel.Item className="flex">
        <Stack
            direction="horizontal"
            className="justify-content-center align-items-center"
            gap={3}
        >
          {/* Map over second chunk of mealkits */}
          {mealkitChunkTwo.map((item) =>
                  <div key={item.id} className="mealkit-card bg-white">
                      <img className="mealkit-card-img-top" src={item.image} alt={item.alt}/>
                      <div className="mealkit-card-body px-6">
                          <h5 className="mealkit-card-title text-center pt-3 pb-6">{item.name}</h5>
                          <p className="mealkit-card-text text-center">{item.text}</p>
                          <p className="mealkit-link text-center"><a className='no-underline text-blue-800' href="/">{item.link}</a></p>
                      </div>
                  </div>
          )}
        </Stack>
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

