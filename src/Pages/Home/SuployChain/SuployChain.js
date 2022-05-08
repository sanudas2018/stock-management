import React from 'react';
import supply_img from '../../../Images/supply-chain/supply.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import '../../../style.css';
import '../../../min'

const SuployChain = () => {
   
   const icon3 = <FontAwesomeIcon icon={faDice}></FontAwesomeIcon>
   const icon4 = <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
   const icon5 = <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
   const icon2 = <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
   const icon1 = <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
   const icon6 = <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>
   return (
      <>
       <section id='supply1' className='supply-chain'>
          <div className="container supply_container">
             <div className="supply-left">
                <h1>Supply Chaining</h1>
                <p>The way we supply our products and we strive to provide.</p>
                <div className="supply-img">
                   <img src={supply_img} alt='' />
                </div>
                <button className='btn btn-Primary'>Learn More</button>

             </div>
             <div className="supply-right">
                <article className='category'>
                   <span className='category_icon'>{icon4}</span>
                   <h5>Automate Supply Chain Decisions</h5>
                   <p>You'll build automated, exception based plans that adapt and respond to frequently changing business conditions.</p>
                </article>
                <article className='category'>
                   <span className='category_icon'>{icon3}</span>
                   <h5>Probabilistic Forecasting</h5>
                   <p>Predict a range of outcomes and the probability for each possibility to accurately prescribe risk adjusted stocking policies.</p>
                </article>
                <article className='category'>
                   <span className='category_icon'>{icon2}</span>
                   <h5>Intermittent Demand Planning</h5>
                   <p>Engineered for intermittent demand, Smart’s field proven methods succeed on even the hardest to forecast.</p>
                </article>
                <article className='category'>
                   <span className='category_icon'>{icon1}</span>
                   <h5>Collaborative Planning</h5>
                   <p>Share collaborative “what if” demand forecasts, inventory policies and develop an authorized consensus.</p>
                </article>
                <article className='category'>
                   <span className='category_icon'>{icon6}</span>
                   <h5>Smart ERP Integrations</h5>
                   <p>Seamlessly integrate with your system of record with an automated bi-directional data exchange.</p>
                </article>
                <article className='category'>
                   <span className='category_icon'>{icon5}</span>
                   <h5>Cloud Native Platform</h5>
                   <p>A single, secure, and scalable native cloud platform with multiple end user Apps that helps you predict accurately.</p>
                </article>
             </div>

          </div>

       </section>
         
      </>
   );
};

export default SuployChain;