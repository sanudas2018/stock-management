import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';
import SingleProduct from '../../Inventory/SingleProduct/SingleProduct';
import '../../../style.css';
import './HomeProduct.css'
const HomeProduct = () => {
   const [product] = useProduct();
   const homeProductShow = product.slice(0, 6);
   const navigate = useNavigate();
      const manageInventory = () => {
         const path = `/manage-inventory`;
         navigate(path);
      }
   return (
      
      <>
      <section id='product1' className='product'>
            <h2>Our Product</h2>
            <div className='container product__Container'>
            
            {
               homeProductShow.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
          
            </div>
            <div className='w-100 mange-btn'>
               <button  onClick={() => manageInventory()} className='btn btn-Primary'>Manage Inventory</button>
            </div>
            
         </section>
         
      </>
   );
};

export default HomeProduct;