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
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SingleProductUpdate from './Pages/Inventory/SingleProductUpdate/SingleProductUpdate';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddNewProduct from './Pages/AddNewProduct/AddNewProduct';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import MyItem from './Pages/MyItem/MyItem';
import { ToastContainer } from 'react-bootstrap';

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
          <Route  path='/manage-item' element={<SingleProductUpdate></SingleProductUpdate>}></Route>
          <Route  path='/inventory-update' element={<SingleProductUpdate></SingleProductUpdate>}></Route>
          <Route  path='/inventory-update/:id' element={
            <RequireAuth>
              <SingleProductUpdate></SingleProductUpdate>
            </RequireAuth>
          }></Route>
          <Route  path='/blogs' element={<Blogs></Blogs>} ></Route>
          <Route  path='/about' element={<About></About>}></Route>
          <Route  path='/login' element={<Login></Login>}></Route>
          <Route  path='/registration' element={<Registration></Registration>}></Route>
          <Route  path='/manage-inventory' element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }></Route>
          <Route  path='/add-new-product' element={
            <RequireAuth>
              <AddNewProduct></AddNewProduct>
            </RequireAuth>
          }></Route>

          <Route  path='/update-product/:id' element={
            <RequireAuth>
              <UpdateProduct></UpdateProduct>
            </RequireAuth>
          }></Route>
          
          <Route  path='/add-item' element={
            <RequireAuth>
              <Additem></Additem>
            </RequireAuth>
          }></Route>

          <Route  path='/my-item' element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }></Route>


          <Route  path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </ProductsContext.Provider>
  
      
      
    </div>
  );
}

export default App;
