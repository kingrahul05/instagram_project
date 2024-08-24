// import React, { useEffect } from 'react'
// import ProfileUserDetails from '../../../ProfileComponets/ProfileUserDetails'
// import ReqUserPostPart from '../../../ProfileComponets/ReqUserPostPart'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { findUserByUserIdsAction, getUserprofileAction } from '../../../Redux/User/Action'


// const Profile = () => {

//   const dispatch=useDispatch();
//   const token = localStorage.getItem("token");
//   const {username}= useParams();
//   const {user}=useSelector(store=>store);

//   const isReqUser=isReqUser(user.reqUser?.id,user.findByUsername?.id);
//   const isFollowed=isFollowing(user.reqUser,user.findByUsername);


//   useEffect(()=>{
//     const data={
//       token,
//       username
//     }
//     dispatch(getUserprofileAction(token))
//     dispatch(findUserByUserIdsAction(data))
//   },[username,user.follower,user.following])




//   return (
//     <div className="px-20">
//         <div className="">
//             <ProfileUserDetails user={isReqUser?user.reqUser:user.findByUsername} isFollowing={isFollowed} isRequser={isReqUser}/>  
//         </div>
//         <div>
//             <ReqUserPostPart user={isReqUser?user.reqUser:user.findByUsername}/>
//         </div>
//     </div>
//   )
// }

// export default Profile




import React, { useEffect } from 'react';
import ProfileUserDetails from '../../../ProfileComponets/ProfileUserDetails';
import ReqUserPostPart from '../../../ProfileComponets/ReqUserPostPart';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findUserByUserIdsAction, getUserprofileAction } from '../../../Redux/User/Action';

// Define the helper functions
const isReqUser = (reqUserId, profileUserId) => reqUserId === profileUserId;
const isFollowing = (reqUser, profileUser) => reqUser?.following?.includes(profileUser?.id);

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  const user = useSelector(store => store.user);

  // Determine if the profile belongs to the current user and if the current user is following the profile user
  const isReqUserProfile = isReqUser(user.reqUser?.id, user.findByUsername?.id);
  const isFollowed = isFollowing(user.reqUser, user.findByUsername);

  console.log("-------",user)

  useEffect(() => {
    if (token && username) {
      dispatch(getUserprofileAction({ token, username }));
      dispatch(findUserByUserIdsAction({ token, username }));
    }
  }, [dispatch, token, username]);

  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails
          user={isReqUserProfile? user.reqUser : user.findByUsername}
          isFollowing={isFollowed}
          isRequser={isReqUserProfile}
        />
      </div>
      <div>
        <ReqUserPostPart user={isReqUserProfile? user.reqUser : user.findByUsername} />
      </div>
    </div>
  );
};

export default Profile;
