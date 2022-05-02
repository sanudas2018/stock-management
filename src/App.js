import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Header from './Shared/Header/Header';

import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Additem from './Pages/Additem/Additem';

import NotFound from './Pages/NotFound/NotFound';

import Footer from './Shared/Footer/Footer';


import './App.css';
import { createContext, useState } from 'react';
import SingleProductDetails from './Pages/Inventory/SingleProductDetails/SingleProductDetails';
export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <ProductsContext.Provider value={[products, setProducts]}>
        <Header></Header>
        <Routes>
          <Route  path='/' element={<Home></Home>}></Route>
          <Route  path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route  path='/Single-Product-Details/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>
          <Route  path='/blogs' element={<Blogs></Blogs>} ></Route>
          <Route  path='/about' element={<About></About>}></Route>
          <Route  path='/login' element={<Login></Login>}></Route>
          <Route  path='/registration' element={<Registration></Registration>}></Route>
          <Route  path='/add-item' element={<Additem></Additem>}></Route>
          <Route  path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </ProductsContext.Provider>
  
      
      
    </div>
  );
}

export default App;
