import { useEffect, useState } from 'react';

const useProduct = () => {
   const [product, setProduct] = useState([]);
   useEffect(() => {
      fetch('https://morning-journey-72392.herokuapp.com/products')
         .then(res => res.json())
         .then(data => setProduct(data))
   },[]);
   return [product, setProduct];
};

export default useProduct;