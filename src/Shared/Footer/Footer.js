import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { f} from '@fortawesome/free-solid-svg-icons';
// import { faFaceKissBeam} from '@fortawesome/free-solid-svg-icons';
import facebook from '../../Images/log-account/facebook-logo.png';
import twitter from '../../Images/log-account/twitter-logo-vector-png-clipart-1.png';
import whatup from '../../Images/log-account/WhatsApp-logo.png';
import './Footer.css';
import '../../style.css';

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
   // const facebook = <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
   // const twitter = <FontAwesomeIcon icon={faFaceKissBeam}></FontAwesomeIcon>
   
   return (
      <>
      <footer className='footer'>
         <div className='container footer_container'>
            <div className="footer_1">
               <Link to='#' className='footer_logo'><h4>STAR TECH BD</h4></Link>
               <p>Inventory managers struggle with the conflicting priorities of customer satisfaction and cost control.</p>
            </div>
         
         <div className='footer_2'>
            <h4>PermaLinks</h4>
            <ul>
               <li><Link to='/' className='footer_logo'>Home</Link></li>
               <li><Link to='/inventory' className='footer_logo'>Product</Link></li>
               <li><Link to='/add-new-product' className='footer_logo'>Items</Link></li>
               
               <li><Link to='/my-item' className='footer_logo'>About</Link></li>
               <li><Link to='/blogs' className='footer_logo'>Blog</Link></li>
            </ul>
         </div>
         <div className='footer_3'>
            <h4>Primacy</h4>
            <ul>
               <li><Link to='#' className='footer_logo'>Privacy Policy</Link></li>
               <li><Link to='#' className='footer_logo'>Terms and Conditions</Link></li>
               <li><Link to='#' className='footer_logo'>Refund Policy</Link></li>
               
            </ul>
         </div>
         <div className='footer_4'>
            <h4>Contact Us</h4>
            <div>
               <p>+8801642391871</p>
               <p>programing26@gmail.com</p>
            </div>
            <div className='footer_socials'>
               <img src={facebook}></img>
               <img src={twitter}></img>
               <img src={whatup}></img>
            </div>
         </div>
         
         </div>
         <div className='footer_copyright'>
            <small>copyright &copy; {year} Star Tech BD Computer. All rights reserved.</small>
         </div>
      </footer>         


      {/* .................................  */}
         {/* <Container fluid className='footer'>
            <Row>
               
               <Col xs={12} md={12}>
               copyright &copy; {year} Star Tech BD Computer. All rights reserved.
               </Col>
               
            </Row>
         </Container> */}
      </>
   );
};

export default Footer;