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
   const hendelUpdate = (id) => {
      navigate(`/inventory-update/${id}`);
   }
   return (
      <div>
         
         <article className='product__item'>
                  <div className="product__item-image">
                     <img className='fluid'  src={image} alt=''></img>
                  </div>
                  <div className="product-info">
                     <h3 className='pro-name'>{name}</h3>
                     <h5 className='pro-h5'>Price:  {price}</h5>
                     <h5 className='pro-h5'>Quantity: {quantity}</h5>
                     <p className='supplier'>Supplier: {supplier}</p>
                     <p className='prod-description'>Des: {description.slice(0,30) + ' ...  '} <span className='read-more cursor-pointer bg-warning' onClick={() => handleProductDetails(_id)}>Read More</span></p>
                     
                  </div>
                  <div className="update">
                     <button className='btn btn-Primary' onClick={()=> hendelUpdate(_id)}>Update</button>
                  </div>
         </article>
         
           
      </div>
   );
};

export default SingleProduct;