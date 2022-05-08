import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../Images/SliderImg/slider-5.jpg';
import slider2 from '../../../Images/SliderImg/slider-2.JPG';
import slider3 from '../../../Images/SliderImg/slider-3.JPG';
import slider4 from '../../../Images/SliderImg/slider-4.JPG';
import slider5 from '../../../Images/SliderImg/slider-1.JPG';
import slider6 from '../../../Images/SliderImg/slider-6.jpg';
import slider7 from '../../../Images/SliderImg/slider-7.jpg';

import './Slider.css'

const Slider = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
   return (
      <Carousel id='slider'  className='sliderImgResize' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
               className="d-block w-100 "
               src={slider7}
               alt="First slide"
            />
            <Carousel.Caption className='content'>
               <h1 className='text-white'>Inventory Management Software</h1>
               <p className='text-white text-center'>Welcome Spreadsheets The Cloud Inventory Management Software</p>
               
               
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src={slider3}
               alt="Second slide"
            />

            <Carousel.Caption className='content'>
               <h1>Our Computer Product </h1>
               <p className='text-white text-center'> Laptop notebooks and gaming computers and laptops are sold here dealerships</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src={slider1}
               alt="Third slide"
            />

            <Carousel.Caption className='content'>
               <h1>Eid Special Offer</h1>
               <p className='text-white text-center'>Eid special offer is running here Computer Laptop Mack related products are being sold at wholesale price</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src={slider4}
               alt="Third slide"
            />

            <Carousel.Caption className='content'>
               <h1>Our Computer Product </h1>
               <p className='text-white text-center'>
               Laptop notebooks and gaming computers and laptops are sold here dealerships
               </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src={slider2}
               alt="Third slide"
            />

            <Carousel.Caption className='content'>
               <h1> Optimized Stock Levels</h1>
               <p className='text-white text-center'>
                  Ship on time and in full with risk-adjusted reorder points
               </p>
            </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
   );
};

export default Slider;