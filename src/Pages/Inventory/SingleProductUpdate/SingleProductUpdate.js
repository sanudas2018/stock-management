
import userEvent from '@testing-library/user-event';
import React, { useContext, useRef, useState, createRef, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../../../App';
import auth from '../../../firebase.init';

import './SingleProductUpdate.css';
import '../../../style.css'

const SingleProductUpdate = () => {

   const [user] = useAuthState(auth)
   const {id} = useParams();
   // const [quantitynew, setQuantitynew] = useState([]);
   // const [products, setProducts] = useContext(ProductsContext);
   // const productsUpdate = products.find(productsUpdate => productsUpdate._id === id);
   
   // const navigate = useNavigate();
   // const hendelCheckOut = (id) =>{
   //    navigate(`/services/${id}`);
   // }
   // const numberRef = useRef('');
 
   
   // Data Base connection
   const [singleProduct, setSingleProduct] = useState({});
   
   useEffect(() => {
      const url = `http://localhost:5000/inventory-update/${id}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setSingleProduct(data))
   },[singleProduct]);
   // const handleUpdateQuantity = (event) => {
   //    event.preventDefault();
   //    const qty = event.target.qty.value;
   //    const updateQty = {qty};
   //    // data send to server
   //    const url = `http://localhost:5000/inventory-update/${id}`;
   //    fetch(url, {
   //       method:'PUT',
   //       headers: {
   //          'content-type' : 'application/json'
   //       },
   //       body:JSON.stringify(updateQty)
   //    })
   //    .then(res => res.json())
   //    .then(data => {
   //       console.log('success', data);
   //       alert('Update your Quantity');
   //       event.target.reset();
   //    })
   // }

   // const [qty, setQty] = useState([]);
   // useEffect(() => {
   //    const url = `http://localhost:5000/inventory-update/${id}`;
   //    fetch(url)
   //       .then(res => res.json())
   //       .then(data => setQty(data))
   // },[qty]);
   // const handleUpdateQuantity = (event) => {
   //    event.preventDefault();
   //    const qty = event.target.qty.value;
   //    const updateQty = {qty};
   //    // data send to server
   //    const url = `http://localhost:5000/inventory-update/${id}`;
   //    fetch(url, {
   //       method:'PUT',
   //       headers: {
   //          'content-type' : 'application/json'
   //       },
   //       body:JSON.stringify(updateQty)
   //    })
   //    .then(res => res.json())
   //    .then(data => {
   //       console.log('success', data);
   //       alert('Update your Quantity');
   //       event.target.reset();
   //    })
   // }

   //........Data Base end........
   // const [quantitynew, setQuantitynew] = useState([]);
   // const handleqty = event => {
   //    const {quantity, ...rest} = singleProduct;
   //    const newQty = event.target.value;
   //    const upQty = {quantity: newQty, ...rest};
   //    setQuantitynew(upQty)
   //    console.log(upQty)
   // }

   // const formData = createRef();
   
   // const handleQuantity = (event) =>{
   //    event.preventDefault();
   //    // const number = event.target.number.value;
   //    // console.log(event);
   //    // const formData = event.target;
   //    // const newQuantity = {
   //    //    qty: formData.qty.value
   //    // }
   //    const newQuantity = {
   //       qty: Number(formData.current.qty.value)
   //    }
   //    // console.log(newQuantity)
   //    setQuantitynew ([...quantitynew, newQuantity]);
   //    // const addPreviesQuantity = addQuantity + newQuantity;
   //    // (addPreviesQuantity)
      
   //    console.log(quantitynew)
   //    // .... 
      
   // }
   // const decQty = (event) => {
   //    const indexOfArray = event.target.value;
   //    quantitynew[indexOfArray].qty = quantitynew[indexOfArray].qty - 1;
   //    setQuantitynew([...quantitynew]); 
   // }
   // const handleDecrement = (cart_id) => {
      
   //    setSingleProduct(singleProduct => 
   //       singleProduct.map( item => 
   //          singleProduct._id === item._id ? {...item, quantity: item.quantity - 1} : item
   //          )
   //       )
   //       console.log(singleProduct)

     
   // }
   return (
      <>
       <section className='product-qty'>
            <h2 className='title'>Single Product Stock Manage</h2>
            {/* <h5>{user.displayName}</h5> */}
            <div className='container product-qty__Container'>

               <article className='product-qty__item'>
                     <div className="product-qty_image">
                        <img className='fluid'  src={singleProduct.image} alt=''></img>
                     </div>
                     <div className="product-qty-info">

                        <h5 className='pro-qty-name'>{singleProduct.name}</h5>
                        <p className='pro-info'>Price:  {singleProduct.price}</p>
                        <p className='pro-info'>Quantity: {singleProduct.quantity}</p>
                        <p className='pro-info'>Supplier: {singleProduct.supplier}</p>
                        
                        
                     </div>
                     <div className="update-qty">
                        <form>
                           <input type="number" placeholder='Input Quantity' />
                           <button className='btn btn-danger'>Delivered</button>
                           <button className='btn btn-Primary'>Quantity Update</button>
                        </form>
                        
                     </div>
               </article>
            
            </div>
           
         </section>



  
         {/* <div className="singleDetails mt-3">
            <Card className='w-50 mx-auto border-4 shadow p-3'>
               <h5>{user.displayName}</h5>
               <p>{id}</p>
               <Card.Img className='singleImg' variant="top" src={singleProduct.image}  alt=''/>
               <Card.Body>
                  <Card.Title>{singleProduct.name}</Card.Title>
                  <h1>Price: {singleProduct.price}</h1>
                  
                  <Card.Text>
                     Description: {singleProduct.description}
                  </Card.Text>
                  <h4>Product Quantity: {singleProduct.quantity}</h4> */}
                  {/* <h4>Product Quantity: 
                     {
                        quantitynew.map((item, index) => {
                        return(
                          <>
                           <span key={index}>{item.qty}</span>
                           <Button  variant="primary"  onClick={event => decQty(event)} value={index} className='mx-auto d-block w-50' >Delivered</Button>
                          </>
                        )
                     })
                     }
                  </h4> */}
                  
                  {/* onSubmit={handleQuantity} ref={formData} */}
                  {/* <Form  onSubmit={handleUpdateQuantity} >
                     <Form.Group className="mb-3" controlId="formBasicEmail">

                     <Form.Label>Quantity Add</Form.Label> */}
                     {/* onChange={handleqty}   */}
                     {/* <Form.Control type="text" placeholder="Enter Your Quantity" name="qty"/>

                     </Form.Group> */}
                  
                                 
                  {/* <Button className='mx-auto d-block w-100' variant="primary" type="submit">
                     Update Product
                  </Button> */}
                  {/* onClick={event => decQty(event)} */}
                  {/* onClick={() => handleDecrement(singleProduct._id)}    */}
                  {/* <Button  variant="primary"className='mx-auto d-block w-50' >Delivered</Button>

                  </Form>
               </Card.Body>
            </Card>
         </div> */}
      </>
   );
};

export default SingleProductUpdate;