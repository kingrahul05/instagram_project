import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import Sidebar from '../../Sidebar/Sidebar';
import HomePage from './Homepage/HomePage';
import Profile from './Profile/Profile';
import Story from '../Story/Story';
import { Auth } from '../Auth/Auth';
// import Signup from '../../Component/Rester/Signup';
// import Signin from '../../Component/Rester/Signin'; // Corrected this import, as both Signup and Signin were importing the same component
import store from '../../Redux/store/store'; // Import your Redux store
import EditAccountDetails from '../../Component/EditAccount/EditAccountDetails';
import ForgetPassword from '../../Component/Rester/ ForgetPassword';



const Router = () => {
  const location = useLocation();
  return (
    <Provider store={store}> {/* Wrap your component tree with Provider */}
      <div>
        {(location.pathname !== "/login" && location.pathname !== "/signup") && (
          <div className='flex'>
            <div className="w-[20%] border border-1-slate-500">
              <Sidebar />
            </div>
            <div className="w-full">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:username" element={<Profile />} />
                <Route path="/story" element={<Story />} />
                <Route path="/comment/:postId" element={<HomePage />} />
                <Route path="/account/edit" element={<EditAccountDetails />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
              </Routes>
            </div>
          </div>
        )}
        {(location.pathname === "/login" || location.pathname === "/signup") && (
          <div>
            <Routes>
              <Route path="/signup" element={<Auth />} />
              <Route path="/login" element={<Auth/>} />
            </Routes>
          </div>
        )}
      </div>
    </Provider>
  );
};

export default Router;
