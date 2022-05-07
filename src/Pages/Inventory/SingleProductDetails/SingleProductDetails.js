import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../App';
//tost import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SingleProductDetails.css'

const SingleProductDetails = () => {
   const{id} = useParams();
   const [products] = useContext(ProductsContext);
   const singleProduct = products.find(singleProduct => singleProduct._id === id);
   return (
      <>

         {/* <div className="singleDetails mt-3">
            <Card className='w-50 mx-auto border-4 shadow p-3'>
              
               <div className="thumbnail">
                  <div className="picture1">
                     <Card.Img className='singleImg' variant="top" src={singleProduct.image}  alt=''/>
                  </div>
               
                  <div className="picture2">
                     <Card.Img className='singleImg' variant="top" src={singleProduct.image2}  alt=''/>
                  </div>
               </div>

               <Card.Body>
                  <Card.Title>{singleProduct.name}</Card.Title>
                  <h1>Price: {singleProduct.price}</h1>
                  <Card.Text>
                     {singleProduct.description}
                  </Card.Text>
                  <Button>CheckOut Now</Button>
               </Card.Body>
            </Card>
            <ToastContainer />
         </div> */}
         <section className='product-qty'>
            <h2 className='title'>Single Product Detail</h2>
            {/* <h5>{user.displayName}</h5> */}
            <div className='container product-qty__Container'>

               <article className='product-qty__item'>
                     <div className="product-qty_image thumbnail">
                        <div className="picture1">
                        <Card.Img className='singleImg' variant="top" src={singleProduct.image}  alt=''/>
                        </div>
                  
                        <div className="picture2">
                           <Card.Img className='singleImg' variant="top" src={singleProduct.image2}  alt=''/>
                        </div>
                     </div>
                     <div className="product-qty-info">

                        <h5 className='pro-qty-name'>Name: {singleProduct.name}</h5>
                        <p className='pro-info'>Price:  {singleProduct.price}</p>
                        <p className='pro-info'>Quantity: {singleProduct.quantity}</p>
                        <p className='pro-info'>Supplier: {singleProduct.supplier}</p>
                        <p className='pro-info'>Supplier: {singleProduct.description}</p>
                        
                        
                     </div>
                     <div className="update-qty">
                        <Button className='btn btn-Primary'>Update Quantity</Button>
                        
                     </div>
               </article>
            
            </div>
           
         </section>
      </>
   );
};

export default SingleProductDetails;