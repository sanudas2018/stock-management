import React from 'react';

import Slider from './Slider/Slider';
import './Home.css';

import HomeProduct from './HomeProduct/HomeProduct';
import SuployChain from './SuployChain/SuployChain';
import Features from './Features/Features';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Nav from '../Nav/Nav';


const Home = () => {
   return (
     <>
     <PageTitle title='StarTechBD-Computer'></PageTitle>
       <Slider></Slider>
       <Nav></Nav>
       <HomeProduct></HomeProduct>
       <SuployChain></SuployChain>
       <Features></Features>
     </>
      
      
   );
};

export default Home;