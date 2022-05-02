import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Links from './Links/Links';

import logo from './../../Images/log-account/logo.png';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
   

   const [user] = useAuthState(auth);
   const hendleSingOut = () =>{
      signOut(auth);
   }
   console.log(user)
   const routes = [
      {id: 1, name:'HOME', link: '/'},
      {id: 2, name:'INVENTORY', link: '/inventory'},
      {id: 4, name:'BLOGS', link: '/blogs'},
      {id: 5, name:'ABOUT', link: '/about'},
      {id: 6, name:'ADD ITEM', link: '/add-item'}
     
   ]
   return (
      <>
      <Navbar className='bg-opacity-75'  collapseOnSelect expand="lg" sticky='top'  bg="dark" variant="dark">
         <Container>
            <Navbar.Brand className='side-log' as={Link} to="/"><img src={logo} alt=''></img></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                     }
                     
                  </Nav>
            <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            {
               user ?
               <Nav.Link  onClick={hendleSingOut} as={Link} to="login">Sign Out</Nav.Link> 
               :
               <Nav.Link as={Link} to="login">Login</Nav.Link>
            }  
               {/* <Nav.Link as={Link} to="login">Login</Nav.Link>   */}
           
               <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            
            {
              user && <img className='profilePhoto' src={user?.photoURL}></img>
               
            }
            </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   </>
   );
};

export default Header;