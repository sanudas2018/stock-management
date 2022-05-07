import React from 'react';
import { Table } from 'react-bootstrap';
import jwt from '../../Images/my-protfolio/jwt.JPG'
import './Blogs.css';
import '../../style.css'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Blogs = () => {
   return (
      <>
      <PageTitle title='Blogs'></PageTitle>
      <div className='blog-content '>
         <div className='question-section'>
            <div className='container'>
               <div className='card mt-3' >
                  <div className='card-header'>
                     <span className='d-flex flex-row justify-content-center fs-4 fw-bold '>Important Question and Answer</span>
                  </div>
                  <div className='card-body'>
                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary  position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              01
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>What is the purpose of Jwt and how does it work?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: <br></br></span>
                     <span className='node-js'>JSON Web Token</span> which is used as a token to secure the API or an open value that is used to share security information between two parties.Encodes JSON objects in each JWT, in which the claim is set. This again JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br></br>
                     <img className='auth-img mt-2' src={jwt} alt=''></img>
                    
                     </p>
                  </div>
                  <hr></hr>
                     <button type='button' className='button-style btn btn-primary position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              02
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>Difference between Javascript and nodejs?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: </span>
                     {/* ............  */}

                     <Table className='table-style' striped bordered hover variant="dark">
                        <thead>
                           <tr>
                              <th>No</th>
                              <th>Javascript</th>
                              <th>NodeJs</th>
                             
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1.</td>
                              <td>Javascript is a programming language that is used for writing scripts on the website.  </td>
                              <td>NodeJS is a Javascript runtime environment.</td>
                              
                           </tr>
                           <tr>
                              <td>2.</td>
                              <td>Javascript can only be run in the browsers.</td>
                              <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                              
                           </tr>
                           <tr>
                              <td>3.</td>
                              <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                              <td>Nodejs does not have capability to add HTML tags.</td>
                              
                           </tr>
                           <tr>
                              <td>4.</td>
                              <td>It is basically used on the client-side.</td>
                              <td>It is mostly used on the server-side.</td>
                              
                           </tr>
                           <tr>
                              <td>5.</td>
                              <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                              <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                              
                           </tr>
                           
                           <tr>
                              <td>6.</td>
                              <td>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. </td>
                              <td>Nodejs is written in C, C++ and Javascript.</td>
                              
                           </tr>
                           
                        </tbody>
                        </Table>
                     {/* ............  */}

                     {/* <img className='auth-img mt-2' src='' alt=''></img> */}

                     </p>
                  </div>
                  <hr></hr>

                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary  position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              03
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>When should you use node.js and when should you use MongoDB?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: <br></br></span><strong>NodeJs: </strong>
                     First, NodeJs are primarily for fast communication and non-blocking, event-driven servers, due to its single-threaded nature. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Many connections can be handled concurrently.
                     <span className='node-js'> But loading data from a very large database and generating a report from it would not be so good.</span><br></br>
                     <strong>MongoDB: </strong>MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like documents that can vary in structure.full managed database service automated deployments and config. Here we can keep the collection in a very felix way. Here the data will be in the form of Gula BJSON.This is why we use mongoDB.<br></br>
                    
                     </p>
                  </div>
                  <hr></hr>
                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              04
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>Differences between SQL and NoSQL database?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: </span><br></br>

                     <Table className='table-style' striped bordered hover variant="dark">
                        <thead>
                           <tr>
                              <th>No</th>
                              <th>SQL</th>
                              <th>NoSQL</th>
                             
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1.</td>
                              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). </td>
                              <td>Non-relational or distributed database system.</td>
                              
                           </tr>
                           <tr>
                              <td>2.</td>
                              <td>These databases have fixed or static or predefined schema.</td>
                              <td>They have dynamic schema.</td>
                              
                           </tr>
                           <tr>
                              <td>3.</td>
                              <td>These databases are not suited for hierarchical data storage.</td>
                              <td>These databases are best suited for hierarchical data storage.</td>
                              
                           </tr>
                           <tr>
                              <td>4.</td>
                              <td>These databases are best suited for complex queries.</td>
                              <td>These databases are not so good for complex queries.</td>
                              
                           </tr>
                           <tr>
                              <td>5.</td>
                              <td>Vertically Scalable and Follows ACID property </td>
                              <td>Horizontally scalable and Follows CAP(consistency, availability, partition tolerance)</td>
                              
                           </tr>
                          
                           
                        </tbody>
                        </Table>
                 

                     </p>
                  </div>
                  

                  
               </div>
               {/* ........  */}
               
                    
            </div>

         </div>
      </div>
      </>
      
   );
};

export default Blogs;