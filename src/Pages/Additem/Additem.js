import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Additem.css'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Additem = () => {
   const [myItem, setMyItem] = useState([]);
   useEffect(()=>{
      const getItem = async() => {
         const url = `https://morning-journey-72392.herokuapp.com/products`;
         const {data} = await axios.get(url);
         setMyItem(data);
      }
      getItem();
   },[])
   return (
      <>
      <PageTitle title='Add Item'></PageTitle>
         <h1>add item {myItem.length}</h1>
      </>
   );
};

export default Additem;