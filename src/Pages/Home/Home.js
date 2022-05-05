import React from 'react';

import Slider from './Slider/Slider';
import './Home.css';
import Inventory from '../Inventory/Inventory';


const Home = () => {
   return (
     <>
       <Slider></Slider>
       <Inventory></Inventory>
     </>
      
      
   );
};

export default Home;