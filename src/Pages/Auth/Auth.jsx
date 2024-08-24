import React from 'react';
import './Auth.css';
import { useLocation } from 'react-router-dom';
 import Signup from '../../Component/Rester/Signup';
import Signin from '../../Component/Rester/Signin';

export const Auth = () => {
  const location = useLocation();
  return (
    <div>
      <div className='flex items-center justify-center h-[100vh] space-x-5'>
        <div className='relative hidden lg:block'>
          <div className='h-[38.3rem] w-[32rem]'>
            <img
              className='h-full w-full'
              src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
              alt=""
            />
            <div className="mobileWallpaper h-[20rem] w-[30.7rem] absolute top-6 right-3">
            </div>
          </div>
        </div>
        <div className='w-[40vw] lg:w-[20vw]'>

          {location.pathname === "/login" ? <Signin/> : <Signup/>}
          
        </div>
      </div>
    </div>
  );
};

export default Auth;