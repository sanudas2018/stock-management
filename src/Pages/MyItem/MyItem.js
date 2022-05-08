import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../App';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Products from '../Products/Products';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
   const [allProducts, setAllProducts] = useContext(ProductsContext);
   const [user] = useAuthState(auth)
   const [myItem, setMyItem] = useState([]);
   
   useEffect(()=>{
      
      const getItem = async() => {
         console.log(user.email)
         const email = user.email;
         const url = `https://morning-journey-72392.herokuapp.com/products?email=${email}`;
         const {data} = await axios.get(url);
         setMyItem(data);
         console.log(data)
      }
      getItem();
      // const email = user.email;
      
      // const url = `https://morning-journey-72392.herokuapp.com/products?email=${email}`;
      // fetch(url)
      //    .then(res => res.json())
      //    .then(data => setMyItem(data))
   },[user])
   
   const navigate = useNavigate();
   const AddNewProduct = () => {
      const path = `/add-new-product`;
      navigate(path);
   }
   // delete handle
   const handleProductDelete = (id) => {
      const deleteConfirm = window.confirm('Are You Sure You Want TO Delete');
      if(deleteConfirm){
         console.log('Delete user with id', id);
         const url = `https://morning-journey-72392.herokuapp.com/products/${id}`;
         fetch(url, {
            method:'DELETE',
         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0){
                  const remainingData = allProducts.filter(singleProduct => singleProduct._id !== id);
                  setAllProducts(remainingData);
               }
            });
      }
     
   }
   // ...... Update Product ...... 
      const handleProductUpdate = (id) => {
         console.log('update now ---', id)
      }
  
   return (
      <>
      <PageTitle title='My Item'></PageTitle>
              <h1 className='totalProduct'>My Added Product: {myItem.length}</h1>
         <div className="add-product-btn-container">
            <h5 className='add-product-btn btn btn-Primary' onClick={() => AddNewProduct()} >ADD NEW PRODUCT</h5>
         </div>
         <Table className='table' striped bordered hover variant="dark">
            <thead>
               <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Supplier</th>
                  <th colSpan={3} className='action'>Action</th>
                  
               </tr>
            </thead>
            <tbody>

            {
               allProducts.map((product, index) => <Products key={product._id} product={product} index={index} handleProductDelete={handleProductDelete} handleProductUpdate={handleProductUpdate}></Products>)
            }
               
               
            </tbody>
            </Table>
      </>
   );
};

export default MyItem;