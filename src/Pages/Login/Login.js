import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
   const [validated, setValidated] = useState(false)
   const navigate = useNavigate();

   // state/location ta mone rakhar janno
   const location = useLocation();
   const from = location?.state?.from?.pathname || "/";
   //1st reset password
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );
   //  .............
   const navigateRegistration = () => {
      navigate('/registration');
   }
   // 2nd
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
   //  ............
    console.log(user)
    //From data received
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // handle submit with login
    const handleLogin = (event) => {
       const form = event.currentTarget;
       if(form.checkValidity() === false){
          event.preventDefault();
          event.stopPropagation();
         //  return;
       }
       setValidated(true);
      event.preventDefault();
      // 1st
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      // 3rd
      signInWithEmailAndPassword(email, password); 

    }
    // conditional item
    if(user){
      navigate(from, { replace: true });
    }
    // error hendle
    let errorElement;
   if (error) {
      errorElement =(<div>
         <p className='text-danger'>Error: {error.message}</p>
       </div>
       )
    }
    // reset password
    const resetPassword = async() => {
      const email = emailRef.current.value;
      if(email){
         await sendPasswordResetEmail(email);
         //  alert('Sent email');
         toast('Sent email');
      }else{
         toast('Please Enter Your Email Address');
      }
   }
   // loading
   if(loading || sending){
      return <Loading></Loading>
   }
   return (
      <>
         <h1 className='text-center loginFont'>Login</h1>
         <div className='w-25 border p-4 shadow mx-auto mt-4'>
         <Form noValidate validated={validated} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

               <Form.Label>Email address</Form.Label>
               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            
            
            {/* Forget password  */}
            <p className='curser' onClick={resetPassword}>Forget Password? <span className='text-primary'>Reset Password</span></p>
            {errorElement}
            <Button className='mx-auto d-block w-100' variant="primary" type="submit">
               Login
            </Button>
            <p className='curser mt-2' onClick={navigateRegistration}>Are you a new patient? <span className='text-primary'>Please Registration</span></p>
            {/* social link */}

            <SocialLogin></SocialLogin>
            <ToastContainer />
          
         </Form>
         </div>
      </>
   );
};

export default Login;