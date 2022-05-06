import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import './Products.css'
import { useNavigate } from 'react-router-dom';

const Products = ({product, index, handleProductDelete}) => {
   const {_id, name, image, price, quantity,supplier} = product;
   const remove = <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
   const update = <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
   const add = <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
   const navigate = useNavigate();
   const AddNewProduct = () => {
      const path = `/add-new-product`;
      navigate(path);
   }
   // update-product/
   const navigateUpdate = useNavigate();
   const handleProductUpdate = (id) => {
      const path = `/update-product/${id}`;
      navigateUpdate(path);
   }
   return (
      <>
      
         <tr>
            <td>{index + 1}</td>
            {/* <td><img src={{image}} alt=''></img></td> */}
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td className='actionBtn add1' title='Add Product' onClick={() => AddNewProduct()}>{add}</td>
            <td className='actionBtn update1'  title='Product Update' onClick={() => handleProductUpdate(_id)}>{update}</td>
            <td className='actionBtn delete1'  title='Delete Product' onClick={() => handleProductDelete(_id)}>{remove}</td>
         </tr>
      </>
   );
};

export default Products;