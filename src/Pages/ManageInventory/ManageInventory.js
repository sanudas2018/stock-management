import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
   
   // delete handle
   const handleProductDelete = (id) => {
      const deleteConfirm = window.confirm('Are You Sure You Want TO Delete');
      if(deleteConfirm){
         console.log('Delete user with id', id);
         const url = `http://localhost:5000/products/${id}`;
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
   const navigate = useNavigate();
   const AddNewProduct = () => {
      const path = `/add-new-product`;
      navigate(path);
   }
   return (
      <>
         <h1 className='totalProduct'>Total Stock Product: {allProducts.length}</h1>
         <h5 className='add-product btn btn-Primary' onClick={() => AddNewProduct()} >ADD NEW PRODUCT</h5>
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
               allProducts.map((product, index) => <Products key={product._id} product={product} index={index} handleProductDelete={handleProductDelete}></Products>)
            }
               
               
            </tbody>
            </Table>
      </>
   );
};

export default ManageInventory;