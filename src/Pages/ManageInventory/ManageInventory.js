import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import Products from '../Products/Products';
import './ManageInventory.css'

const ManageInventory = () => {
   const [allProducts, setAllProducts] = useContext(ProductsContext);
   useEffect(() =>{
      fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data => setAllProducts(data))
   },[]);
   return (
      <>
         <Table className='table' striped bordered hover variant="dark">
            <thead>
               <tr>
                  <th>No</th>
                  {/* <th>Image</th> */}
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Supplier</th>
                  <th colSpan={3} className='action'>Action</th>
                  
               </tr>
            </thead>
            <tbody>

            {
               allProducts.map((product, index) => <Products key={product._id} product={product} index={index}></Products>)
            }
               
               
            </tbody>
            </Table>
      </>
   );
};

export default ManageInventory;