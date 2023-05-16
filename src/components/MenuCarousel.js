import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../index.css'
import { useState, useRef } from 'react';
import menuitems from "../menuitems";

export default function MenuCarousel () {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const listItems = ['Adventurous Foodie', 'Quick & Easy', 'Carb Conscious', 'Fan Faves', 'Veggie', '*NEW Simple & Save'];

    const [selectedItem, setSelectedItem] = useState(0);
    
    const carouselRef = useRef(null);

    const handleListItemClick = (index) => {
        setSelectedItem(index);

        if (carouselRef.current) {
            const slidesPerItem = 4;
            const targetSlide = index * slidesPerItem;
    
            carouselRef.current.goToSlide(targetSlide);
        }
    }

    return (
        <>
        <div className="menu-container flex flex-col justify-center items-center">
            <h1 className="menu-title pt-12 pb-5">On the menu this week</h1>
            <ul className="menu-nav-list flex gap-12 mb-8">
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        className={`menu-nav-item${selectedItem === index ? " selected" : ""}`}
                        onClick={() => handleListItemClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        <div className="total-container flex">
            <div className="blank-container"></div>
            <Carousel 
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform 900ms ease-in-out"
                transitionDuration={800}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                slidesToSlide={3}
                centerMode={false}
                className="carousel"
                ref={carouselRef}
            >
                {menuitems.map((item) => 
                    <div className="menuitem-container flex flex-col items-center pd-3" key={item.id}>
                        <img className="menuitem-image" src={item.image} alt={item.alt}></img>
                        <h3 className="menuitem-title py-2 tracking-widest">{item.name}</h3>
                    </div>
                )}
            </Carousel>
            <div className="blank-container"></div>
        </div>
        <div className="bottom-container"></div>
        </>
    );
}