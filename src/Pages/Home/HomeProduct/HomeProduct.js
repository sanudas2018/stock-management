import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import SingleProduct from '../../Inventory/SingleProduct/SingleProduct';

const HomeProduct = () => {
   const [product] = useProduct();
   const homeProductShow = product.slice(0, 6);
   return (
      <>
      <section className='product'>
            <h2>Our Product</h2>
            <div className='container product__Container'>
            
            {
               homeProductShow.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
          
            </div>
            
         </section>
         
      </>
   );
};

export default HomeProduct;