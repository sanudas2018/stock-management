import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

import CustomLink from './CustomLink/CustomLink'
import logo from './../../Images/log-account/logo.png';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

import '../../style.css';

import '../../min';
import './Header.css'


const Header = () => {
   

   const [user] = useAuthState(auth);
   const hendleSingOut = () =>{
      signOut(auth);
   }


   // const routes = [
   //    {id: 1, name:'HOME', link: '/'},
   //    {id: 2, name:'INVENTORY', link: '/inventory'},
   //    {id: 4, name:'BLOGS', link: '/blogs'},
   //    {id: 5, name:'ABOUT', link: '/about'},
   //    {id: 6, name:'ADD ITEM', link: '/add-item'},
   //    {id: 7, name:'MANAGE ITEM', link: '/inventory-update'},
   //    // {id: 7, name:'Manage Inventory', link: '/manage-inventory'},
   
   // ]
   // const bar = <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
   // const close = <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
   return (
      <>
      
      <Navbar className='bg-opacity-75 nav'  collapseOnSelect expand="lg" sticky='top'>
         <Container>
            <Navbar.Brand className='side-log' as={Link} to="/"><img src={logo} alt=''></img></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav " className='colaps' />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="">
                  {/* {
                     user && <Link to='/joy'>joy</Link>
                  } */}
                     {/* {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                     } */}
                     <NavLink className='link'>
                        <CustomLink to='/'>Home</CustomLink>
                     </NavLink>
                     <NavLink className='link'>
                        <CustomLink to='/inventory'>Product</CustomLink>
                     </NavLink>
                     
                     {
                        user &&  <NavLink className='link'>
                        <CustomLink to='/add-new-product'>Add Item</CustomLink>
                     </NavLink>
                     }
                    
                     {
                        user && <NavLink className='link'>
                        <CustomLink to='/manage-inventory'>Manage Item</CustomLink>
                     </NavLink>
                     }
                    {
                       user &&  <NavLink className='link'>
                       <CustomLink to='/my-item'>My Item</CustomLink>
                    </NavLink>
                    }
                     <NavLink className='link'>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                     </NavLink>
                     
                     
                  </Nav>
            <Nav>
           
            <div className="right-side text-color">
            {
               user ?
               <Nav.Link className='text-color'  onClick={hendleSingOut} as={Link} to="login">Sign Out</Nav.Link> 
               :
               <Nav.Link className='text-color login-res reg' as={Link} to="login">Login</Nav.Link>
            }  
               {/* <Nav.Link as={Link} to="login">Login</Nav.Link>   */}
           
              {
                 user ? 
                 <Nav.Link className='text-color' as={Link} to="registration"></Nav.Link>
                 :
                 <Nav.Link className='text-color reg' as={Link} to="registration">Registration</Nav.Link>
              }
            
            {
              user && <img className='profilePhoto' src={user?.photoURL}></img>
               
            }
            </div>
            </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   </>
   );
};

export default Header;