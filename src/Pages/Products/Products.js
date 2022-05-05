import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = ({product, index}) => {
   const {_id, name, image, price, quantity,supplier} = product;
   const remove = <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
   const update = <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
   const add = <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
   return (
      <>
      
         <tr>
            <td>{index + 1}</td>
            {/* <td><img src={{image}} alt=''></img></td> */}
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td className='actionBtn add1'>{add}</td>
            <td className='actionBtn update1'>{update}</td>
            <td className='actionBtn delete1'>{remove}</td>
         </tr>
      </>
   );
};

export default Products;