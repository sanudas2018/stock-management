import React from 'react';

const Blogs = () => {
   return (
      <div className='blog-content'>
         <div className='question-section'>
            <div className='container'>
               <div className='card mt-3' >
                  <div className='card-header'>
                     <span className='d-flex flex-row justify-content-center fs-4 fw-bold '>Important Question and Answer</span>
                  </div>
                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              01
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>Difference between Authorization and Authentication?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: </span>Authentication is done before the authorization process, whereas authorization process is done after the authentication process. Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. .<br></br>
                     <span className='fw-bold'>For example: In an organization, authentication is the process of verifying and confirming the employee's ID and password, but determining which employee has access to which floor is called authorization.</span><br></br>
                     <img className='auth-img mt-2' src='' alt=''></img>

                     </p>
                  </div>
                  <hr></hr>

                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary  position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              02
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>why are you using firebase? what other options do you have to implement authentication?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: </span><strong>firebase: </strong>
                     I'm using Firebase because, Firebase Realtime Database allows it to create rich, collaborative applications by allowing secure access to the database directly from client-side code. The data is retained locally, and even while offline, realtime events continue, giving the end user a responsive experience.<br></br>
                     <strong>Different way of authentication: </strong>The options I have for implementing authentication are: Back4App, Okta, Couchbase, NativeScript, MongoDB, AWS Amplify, Google Cloud Platform.
                     Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, Certificate-based authentication, Biometric authentication: retina scans, voice recognition, and fingerprints, Token-based authentication.<br></br>
                    
                     </p>
                  </div>
                  <hr></hr>
                  <div className='card-body'>
                     <button type='button' className='button-style btn btn-primary position-relative'>
                           Question
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                              03
                            </span>
                     </button>
                     <h5 className='card-title mt-3'>what other services does firebase provide other than authentication?</h5>
                     <p className='card-text'><span className='fw-bold'>Answer: </span>There are many services which Firebase provides, Most useful of them are:<br></br>

                     1. Cloud Firestore<br></br>
                     2. Cloud Functions<br></br>
                     3. Dynamic Links<br></br>
                     4. Hosting<br></br>
                     5. Cloud Storage<br></br>
                     6. Google Analytics<br></br>
                     7. Predictions<br></br>
                     8. Cloud Messaging<br></br>
                     9. Authentication<br></br>
                     10. Remote Config<br></br>
                 

                     </p>
                  </div>
               </div>
               {/* ........  */}
               
                    
            </div>

         </div>
      </div>
   );
};

export default Blogs;