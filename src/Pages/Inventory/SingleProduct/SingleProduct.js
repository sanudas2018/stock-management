import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = ({product}) => {
   const {_id, name, image, price, description, quantity,supplier} = product;
   const navigate = useNavigate();
   const handleProductDetails = (id) => {
      navigate(`/Single-Product-Details/${id}`)
   }
   return (
      <div>
         
         <Col xs={12} md={12} >
            <Card className='shadow card card-body1'>
               <Card.Img className='img-service' variant="top" src={image}  alt=''/>
               <div className='star'></div>
               <Card.Body className='card-body1'>
                  <Card.Title className='text-center mt-2'>{name}</Card.Title>
                  <h5 className='text-center'>Price: {price}</h5>
                  <h5 className='text-center'>Quantity: {quantity}</h5>
                  <h5 className='text-center'>Supplier: {supplier}</h5>
                  <Card.Text>
                     <span className='card-des'>Description:</span> {description.slice(0,30) + ' ...  '}
                     <span className='read-more cursor-pointer bg-warning' onClick={() => handleProductDetails(_id)}>Read More</span>
                  </Card.Text>
               </Card.Body>
               {/* <Button className='checkout-btn-ser'>CheckOut Now</Button> */}
               <Button className='checkout-btn-ser'>CheckOut Now</Button>
            </Card>
         </Col>
         
      </div>
   );
};

export default SingleProduct;