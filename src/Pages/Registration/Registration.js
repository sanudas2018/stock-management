import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Registration.css'

const Registration = () => {
   //1st checkBox control 
   const [agree, setAgree] = useState(false);
   const navigate = useNavigate();
   const navigateLogin = () => {
      navigate('/login');
   }
   const [
      // 2nd react firebase hook registration
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    // update profile name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
       
      event.preventDefault();
      // 1st
      const displayName = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
            
      // const agree = event.target.terms.checked;
      // if(agree){
      //    createUserWithEmailAndPassword(email, password)
      // }
      // 3rd
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      // alert('Updated profile');
      navigate('/')

   };
   // if(user){
   //    navigate('/login')
   // }
   // error hendle
   let errorElement;
   if (error) {
      errorElement =(<div>
         <p className='text-danger'>Error: {error.message}</p>
       </div>
       )
    }
    // loading
   if(loading || updating){
      return <Loading></Loading>
   }
   return (
      <>
      <div className='w-25 border p-4 shadow mx-auto mt-4'>
      <h3 className='header-text'>Registration</h3>
      <div className="border-text"></div>
      <Form onSubmit={handleRegister}>
         <Form.Group className="mb-3" controlId="formBasicEmail">

         <Form.Label>Name</Form.Label>
         <Form.Control name='name' type="text" placeholder="Enter Name" required />

         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
            
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required/>
         </Form.Group>
         {/* conditional rendaring  */}
         <Form.Group onClick={() => setAgree(!agree)}  className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className={`${agree ? '' : 'text-danger'}`}  name='terms' type="checkbox" label="Accept doctor terms and condition" />
         </Form.Group>

         {errorElement}
         <Button disabled={!agree} className='mx-auto d-block w-100 login_btn'  variant="primary" type="submit" >
            Registration
         </Button>
         <p className='curser' onClick={navigateLogin}>Already have an account? <span className='text-primary'>Please Login</span></p>
         {/* social link */}
         <SocialLogin></SocialLogin>
         <ToastContainer />
         
      </Form>
      </div>
   </>
   );
};

export default Registration;