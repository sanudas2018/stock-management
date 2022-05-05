import React from 'react';
import '../../../style.css';
import avata1 from '../../../Images/supply-chain/CAP_Badge_Top20_Full-Color-150x150-1-150x150.png';
import avata2 from '../../../Images/supply-chain/CAP_CrowdBadge_BestValue_Full-Color-150x150-1-150x150.png';
import avata3 from '../../../Images/supply-chain/GA_Badge_Category-Leaders_Full-Color-150x150-1-e1608042172174.png';
import avata4 from '../../../Images/supply-chain/SA_CrowdBadge_MostRecommended_Full-Color-150x150-1-150x150.png';
import avata5 from '../../../Images/supply-chain/SA_FrontRunners_Full-Color-150x150-1-150x150.png';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';


const Features = () => {
 
   return (
      
      <>

      <section className="features">
         <div className="container features-container">
            <div className="features-header">
               <h1>Features Of Inventory Management </h1>
               <h5>MODERN, SIMPLE YET VERY POWERFUL AND PRECISE CLOUD INVENTORY MANAGEMENT SOFTWARE.</h5>
               <p>SET OF ALL NECESSARY TOOLS THAT YOU NEED TO UPGRADE YOUR BUSINESS</p>
            </div>
            <div className="features-slider">
            
               {/* <div className="card-layer"></div> */}
               <article className='company'>
                  <div className="avata">
                     <img src={avata5} alt=''></img>
                  </div>
                  <div className="features-info">
                     <h5>BARCODE SCANNING</h5>
                  </div>
                  <div className="features-body">
                     <p>Just attach any standard device and you are ready to scan your products.
ERPAG also enables you to generate standard bar codes (EAN, UPC, EAN -13)</p>
                  </div>

               </article>
               
               <article className='company'>
                  <div className="avata">
                     <img src={avata1} alt=''></img>
                  </div>
                  <div className="features-info">
                     <h5>ORDER FULLFILMENT</h5>
                  </div>
                  <div className="features-body">
                     <p>Handle orders from different sales channels.
Automaticaly order missing items, and ship them to your customers. ust attach any standard device.</p>
                  </div>

               </article>
               
               <article className='company'>
                  <div className="avata">
                     <img src={avata4} alt=''></img>
                  </div>
                  <div className="features-info">
                     <h5>POWERFUL REPORTING</h5>
                  </div>
                  <div className="features-body">
                     <p>Our data-grids are powerful reporting engines.
Filter, group sort and render charts in one second.
Export cube data for detail reporting</p>
                  </div>

               </article>
{/*                
               <article className='company'>
                  <div className="avata">
                     <img src={avata3} alt=''></img>
                  </div>
                  <div className="features-info">
                     <h5>MULTIPLE WAREHOUSES</h5>
                  </div>
                  <div className="features-body">
                     <p>Unlimited number of warehouses

Different location and language 
Goods movement between different warehouses
Geo-Location and map render</p>
                  </div>

               </article> */}
               
               {/* <article className='company'>
                  <div className="avata">
                     <img src={avata2} alt=''></img>
                  </div>
                  <div className="features-info">
                     <h5>CENTRALIZED INVENTORY</h5>
                  </div>
                  <div className="features-body">
                     <p>Sync and update your inventory on different eCommerce platforms from one place.
Inventory Reporting across all different warehouses and shelves</p>
                  </div>

               </article> */}
              
            </div>

         </div>
      </section>
      
         
      </>
   );
};

export default Features;