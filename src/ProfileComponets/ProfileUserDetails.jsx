// import React from 'react';
// import { TbCircleDashed } from 'react-icons/tb';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const ProfileUserDetails = () => {
//   const { user } = useSelector(store => store);
//   const navigate = useNavigate();

//   console.log("user", user.reqUser);

//   return (
//     <div className="py-10 w-full">
//       <div className="flex items-center">
//         <div className="w-[15%]">
//           <img
//             className="w-32 h-32 rounded-full"
//             src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
//             alt=""
//           />
//         </div>

//         <div className="space-y-5">
//           <div className="flex space-x-10 items-center">
//             <p>{user.reqUser?.username}</p>
//             <button
//               onClick={() => navigate("/account/edit")}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Edit Profile
//             </button>
//             <TbCircleDashed className="text-blue-500 text-2xl" />
//           </div>
//           <div className="flex space-x-10">
//             <div>
//               <span className="font-semibold mr-2">10</span>
//               <span>Posts</span>
//             </div>

//             <div>
//               <span className="font-semibold mr-2">{user.reqUser?.follower.length}10</span>
//               <span>Followers</span>
//             </div>
//             <div>
//               <span className="font-semibold mr-2">{user.reqUser?.following}2</span>
//               <span>Following</span>
//             </div>
//           </div>
//           <div>
//             <p className="font-semibold">{user.reqUser?.fullName}</p>
//             <p className="font-thin text-sm">{user.reqUser?.bio}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileUserDetails;





import React from 'react';
import { TbCircleDashed } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileUserDetails = () => {
  const { user } = useSelector(store => store);
  const navigate = useNavigate();

  // Destructure user details with fallback values
  const { reqUser } = user;
  const username = reqUser?.username || 'Username';
  const image = reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const fullName = reqUser?.fullName || 'Full Name';
  const bio = reqUser?.bio || 'Bio not available';
  const postsCount = reqUser?.posts?.length || 0; // Assuming reqUser.posts is an array
  const followersCount = reqUser?.follower?.length || 0;
  const followingCount = reqUser?.following?.length || 0; // Assuming reqUser.following is an array

  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src={image}
            alt="Profile"
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p className="text-lg font-semibold">Username</p>
            <button
              onClick={() => navigate("/account/edit")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Edit Profile
            </button>
            <TbCircleDashed className="text-blue-500 text-2xl" />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2"></span>
              <span>Posts</span>
            </div>

            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">2</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            {/* <p className="font-semibold">{fullName}</p> */}
            {/* <p className="font-thin text-sm">Bio</p> */}
            {/* <p>😎Bad Boy☠️🚬</p>
            <p>🏋 Gym enthusiast. 💦</p>
            <p>🔥 Fitness Løvêr 💪</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
