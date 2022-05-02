import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../Images/SliderImg/slider-1.JPG';
// import slider2 from '../../../Images/SliderImg/slider-2.JPG';
// import slider3 from '../../../Images/SliderImg/slider-3.JPG';
// import slider4 from '../../../Images/SliderImg/slider-4.JPG'
import './Slider.css'

const Slider = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
   return (
      <Carousel className='sliderImgResize' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
               className="d-block w-100 "
               src=''
               alt="First slide"
            />
            <Carousel.Caption>
               <h2 className='text-white'>Cosmetic Surgeon</h2>
               <p className='text-white'>Cosmetic Surgeon And Make an Appointment Plastic surgery is typically done to improve one’s appearance.</p>
               
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src=''
               alt="Second slide"
            />

            <Carousel.Caption>
               <h3>Hardware cosmetology</h3>
               <p>Hardware cosmetology is a physiotherapeutic technique for influencing the skin of the face and body</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src=''
               alt="Third slide"
            />

            <Carousel.Caption>
               <h3>Aesthetic Cosmetology</h3>
               <p>Aesthetic cosmetology is a possibility to work in a growing and constantly renewing industry of beautify.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
               className="d-block w-100"
               src=''
               alt="Third slide"
            />

            <Carousel.Caption>
               <h3>Injection Cosmetology</h3>
               <p>
               Well proven minimally invasive method of face and body rejuvenation and correction. “Injections of youth and beauty” have become an excellent alternative to plastic surgery.
               </p>
            </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
   );
};

export default Slider;