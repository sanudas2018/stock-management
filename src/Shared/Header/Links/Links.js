import React from 'react';
import { NavLink } from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';
import '../CustomLink/CustomLink.css'

const Links = ({route}) => {
   const {name, link} = route;
   return (
      <div>
         <NavLink className='link'><CustomLink to={link}>{name}</CustomLink></NavLink>
      </div>
   );
};

export default Links;