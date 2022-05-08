import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faComputer} from '@fortawesome/free-solid-svg-icons';
import { faTruckDroplet} from '@fortawesome/free-solid-svg-icons';
import { faCartFlatbed} from '@fortawesome/free-solid-svg-icons';
import {HashLink as Link} from 'react-router-hash-link';
import './Nav.css'
// import { Link } from 'react-router-dom';


const Nav = () => {
const remove = <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
const product = <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
const delevary = <FontAwesomeIcon icon={faTruckDroplet}></FontAwesomeIcon>
const cartfolt = <FontAwesomeIcon icon={faCartFlatbed}></FontAwesomeIcon>

   return (
      <div>
         <div className="navigation">
      <Link to="#slider" smooth>
        {remove}
      </Link>
      <Link to="#product1" smooth>
        {product}
      </Link>
      <Link to="#supply1" smooth>
        {delevary}
      </Link>
      <Link to="#featu1" smooth>
        {cartfolt}
      </Link>
      
    </div>
      </div>
   );
};

export default Nav;