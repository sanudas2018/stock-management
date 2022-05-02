import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import googleLog from '../../../Images/log-account/google-logo-icon.png'
import githubLog from '../../../Images/log-account/github-cat-inpng.png'
import facebookLog from '../../../Images/log-account/facebook-logo.png'

import './SocialLogin.css'

const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub, gituser, gitLoading, gitError] = useSignInWithGithub(auth);
   const navigate = useNavigate();
    // state/location ta mone rakhar janno
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
   if(loading || gitLoading){
      return <Loading></Loading>
   }
   let errorElement;
   if (error || gitError) {
      errorElement =(<div>
         <p className='text-danger'>Error: {error?.message} {gitError?.message}</p>
       </div>
       )
    }
   //  ..... 
   if (user || gituser) {
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
               <Button className='mt-2 btn btn-block w-100 GitHub-btn' onClick={() => signInWithGithub()} variant="info" type="submit">
               <img className='githubLog d-inline-block ' src={githubLog} alt=''></img>
               <p className='d-inline-block mb-0 px-4 '>Continue with GitHub</p>
               </Button>
               <Button className=' mt-2 btn btn-block w-100 shadow google-btn d-inline-block' onClick={() => signInWithGoogle()} variant="white" type="submit">
               <img className='googlelog' src={googleLog} alt=''></img>
               <p className='d-inline-block mb-0 px-4 '>Continue with Google</p>
               </Button>
               <Button className='mt-2 btn btn-block w-100 Facebook-btn d-inline-block ' type="submit">
               <img className='facebookLog' src={facebookLog} alt=''></img>
               <p  className='d-inline-block mb-0 px-3 '>Continue with Facebook</p>
               </Button>
         </div>
         
      </>
   );
};

export default SocialLogin;