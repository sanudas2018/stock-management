import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import googleLog from '../../../Images/log-account/google-logo-icon.png'


import './SocialLogin.css'

const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
   const navigate = useNavigate();
    // state/location ta mone rakhar janno
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
   if(loading){
      return <Loading></Loading>
   }
   let errorElement;
   if (error) {
      errorElement =(<div>
         <p className='text-danger'>Error: {error?.message}</p>
       </div>
       )
    }
   //  ..... 
   if (user) {
         navigate(from, { replace: true });
    }

   return (
      <>
         <div className="or-main">
            <div className="or-left"></div>
            <span className='textStyle'>OR</span>
            <div className="or-right"></div>
         </div>
         
         <div className='pt-1 mt-2'>
            {errorElement}
               
               <Button className='google_button' onClick={() => signInWithGoogle()} variant="white" type="submit">
                  <img className='google_log' src={googleLog} alt=''/>
                  <p className='google-text'>Continue with Google</p>
               </Button>
               
         </div>
         
      </>
   );
};

export default SocialLogin;