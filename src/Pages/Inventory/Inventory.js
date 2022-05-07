import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import imgpr from '../../Images/my-protfolio/Protfolio.jpg'
import './Inventory.css'
import SingleProduct from './SingleProduct/SingleProduct';
import '../../style.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Inventory = () => {
   // const [products, setProducts] = useState([]);
   const [products, setProducts] = useContext(ProductsContext);
   useEffect(() =>{
      fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data => setProducts(data))
   },[]);
   return (
      <>
      <PageTitle title='All Product'></PageTitle>
      <section className='product'>
            <h2>Our Product</h2>
            <div className='container product__Container'>
            
            {
               products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
          
            </div>
            
         </section>
         
      </>
   );
};

export default Inventory;