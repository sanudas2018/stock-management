import React from 'react';
import errorImages from '../../Images/404.gif';
import './NotFound.css'

const NotFound = () => {
   return (
      <div className='notFound'>
         <img src={errorImages} alt=''></img>
      </div>
   );
};

export default NotFound;