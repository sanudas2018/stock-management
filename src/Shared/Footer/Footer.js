import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
   return (
      <>
         <Container fluid className='footer'>
            <Row>
               
               <Col xs={12} md={12}>
               copyright &copy; {year} Cosmetic Surgeon. All rights reserved.
               </Col>
               
            </Row>
         </Container>
      </>
   );
};

export default Footer;