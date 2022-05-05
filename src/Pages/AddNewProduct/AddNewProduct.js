import React from 'react';
import { useForm } from "react-hook-form";
import newProduct from '../../Images/my-protfolio/login.JPG';
import '../../style.css';

const AddNewProduct = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
   return (
      <>
      <section className='add-product'>
         <div className="container add_product_container">
            <aside className='add-product_aside'>
               <div className="aside_image">
                  <img src={newProduct} alt=''></img>
               </div>
               <h2>WELCOME NEW PRODUCT ADD</h2>
            </aside>
            {/* ...........  */}
            <form className='contact_form' onSubmit={handleSubmit(onSubmit)}>
               <div className="form_name">
                  <input type='text' {...register("firstName", { required: true, maxLength: 20 })} />
                  {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
                  <input type="text" {...register("age", { min: 18, max: 99 })} />
               </div>
               {/* <input className='btn btn-Primary' type="submit" /> */}
               <button type='submit' className='btn btn-Primary'>Add New Product</button>
            </form>
         </div>
      </section>
      
      </>
   );
};

export default AddNewProduct;