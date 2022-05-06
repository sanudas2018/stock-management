import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import newProduct from '../../Images/my-protfolio/login.JPG';
import '../../style.css';

const UpdateProduct = () => {

   const {id} = useParams();
   const [product, setProduct] = useState({});
   useEffect(()=> {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data))
   },[]);
   const handleProductUpdate = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const price = event.target.price.value;
      const quantity = event.target.quantity.value;
      const supplier = event.target.supplier.value;
      const image = event.target.image.value;
      const image2 = event.target.image2.value;
      const description = event.target.description.value;

      const updateProduct= { name, price, quantity, supplier, image, image2, description }
      // Send data server
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(updateProduct)
      })
         .then(res => res.json())
         .then(data => {  
            console.log('update user', data);
            alert('Product Update SuccessFully');
            event.target.reset();
         })
      
   };
   return (
      <>
         <section className='add-product'>
         <div className="container add_product_container">
            <aside className='add-product_aside'>
               <div className="aside_image">
                  <img src={newProduct} alt=''></img>
               </div>
               <h2>WELCOME TO UPDATE PRODUCT</h2>
            </aside>
            {/* ...........  */}
            <form className='contact_form' onSubmit={handleProductUpdate}>
               <div className="form_name">
                  
                  <input name='name' placeholder='Input Your Product Name' type='text' />
                  <input name='price' placeholder='Price' type="text"  />
                  <input name='quantity'  placeholder='Quantity' type="text"  />
                  <input name='supplier'  placeholder='Supplier' type="text"  />
                  <input name='image' placeholder='Image URL/LINK' type="text" />
                  <input name='image2' placeholder='Image Link' type="text"/>
                  <textarea name='description' placeholder='Input Your Product Description' type="text" />
                                   
               </div>
               <input className='btn btn-Primary' type="submit" value='UPDATE NOW' />
               {/* <button type='submit' className='btn btn-Primary'>Add New Product</button> */}
            </form>
         </div>
      </section>
      </>
   );
};

export default UpdateProduct;