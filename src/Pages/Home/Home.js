import React from 'react';

import Slider from './Slider/Slider';
import './Home.css';

import HomeProduct from './HomeProduct/HomeProduct';
import SuployChain from './SuployChain/SuployChain';
import Features from './Features/Features';


const Home = () => {
   return (
     <>
       <Slider></Slider>
       <HomeProduct></HomeProduct>
       <SuployChain></SuployChain>
       <Features></Features>
     </>
      
      
   );
};

export default Home;