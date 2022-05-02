import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import './Inventory.css'
import SingleProduct from './SingleProduct/SingleProduct';

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
      <Container className='mt-4 service'>
      <h1 className='text-center text-primary mb-4'>MY SERVICES</h1>
         <Row xs={1} md={3} lg={4} className="g-4">
            
            {
               products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
           
         </Row>
      </Container>
         
      </>
   );
};

export default Inventory;