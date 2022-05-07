import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const MyItem = () => {
   const [user] = useAuthState(auth)
   const [myItem, setMyItem] = useState([]);
   
   useEffect(()=>{
      
      const getItem = async() => {
         // console.log(user.email)
         const email = user.email;
         const url = `http://localhost:5000/products?email=${email}`;
         const {data} = await axios.get(url);
         setMyItem(data);
         // console.log(data)
      }
      getItem();
   },[user])
   
  
  
   return (
      <>
      <PageTitle title='My Item'></PageTitle>
         <h1>my item{myItem.length}</h1>
         <h5>{myItem.email}</h5>
      </>
   );
};

export default MyItem;