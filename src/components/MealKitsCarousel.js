import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import mealkits from '../mealkits'

export default function MealKitsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mealkit-carousel-container">
    <h2 className='mealkit-title text-center p-5'>Whatever you're craving, we've got you covered</h2>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        
        {mealkits.map((item) => 
            <Carousel.Item>
                <div key={item.id} className="mealkit-card bg-white">
                    <img className="mealkit-card-img-top" src={item.image} alt={item.alt}/>
                    <div className="mealkit-card-body px-6">
                        <h5 className="mealkit-card-title text-center pt-3 pb-6">{item.name}</h5>
                        <p className="mealkit-card-text text-center">{item.text}</p>
                        <p className="mealkit-link text-center"><a className='no-underline text-blue-800' href="/">{item.link}</a></p>
                    </div>
                </div>
            </Carousel.Item>
        )}

    </Carousel>
    </div>
  );
}
