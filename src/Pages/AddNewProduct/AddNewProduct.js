import React from 'react';
import { useForm } from "react-hook-form";
import newProduct from '../../Images/my-protfolio/login.JPG';
import '../../style.css';

const AddNewProduct = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
      console.log(data)
      const url = `http://localhost:5000/products`;
      fetch(url, {
         method:'POST',
         headers: {
            'content-type': 'application/json' 
         },
         body:JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result =>{
            console.log(result);
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
               <h2>WELCOME TO ADD NEW PRODUCT</h2>
            </aside>
            {/* ...........  */}
            <form className='contact_form' onSubmit={handleSubmit(onSubmit)}>
               <div className="form_name">
                  <input placeholder='Input Your Product Name' type='text' {...register("name", { required: true, maxLength: 20 })} />
                  <input placeholder='Price' type="text" {...register("price")} />
                  <input placeholder='Quantity' type="text" {...register("quantity")} />
                  <input placeholder='Supplier' type="text" {...register("supplier")} />
                  <input placeholder='Image URL/LINK' type="text" {...register("image")} />
                  <input placeholder='Image Link' type="text" {...register("image2")} />
                  <textarea placeholder='Input Your Product Description' type="text" {...register("description")} />
                  {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
                  
               </div>
               <input className='btn btn-Primary' type="submit" value='Add New Product' />
               {/* <button type='submit' className='btn btn-Primary'>Add New Product</button> */}
            </form>
         </div>
      </section>
      
      </>
   );
};

export default AddNewProduct;