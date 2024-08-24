// import React from 'react'
// import SuggestionCard from './SuggestionCard';




// const HomeRight = () => {
//   const { user, post } = useSelector(store => store); 
//   return (
//     <div className="">

//       <div>
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <div>
//               <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2024/01/10/16/22/man-8499961_640.jpg" alt="" />
//             </div>
//             <div className="ml-3">
//               <p>FullName</p>
//               <p className="opacity-70">username</p>
//             </div>
//           </div>

//           <div>
//             <p className="text-blue-700 font-semibold">
//               swith
//             </p>
//           </div>
//         </div>
        
//         </div>
//         <div className="space-y-5 mt-10">
//             {user.populerUsers?.map((item)=><SuggestionCard/>)}
//           </div>
//       </div>
    
//   )
// }

// export default HomeRight



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPopularUser } from '../Redux/User/Action'; // Correct the path if needed

// const HomeRight = () => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem('token');
//   const { popularUsers } = useSelector(store => store.user);

//   useEffect(() => {
//     dispatch(getPopularUser(token));
//   }, [dispatch, token]);

//   const fallbackImage = 'https://via.placeholder.com/150'; // Fallback image URL

//   return (
//     <div className='homeRightContainer'>
//       <h2>Popular Users</h2>
//       <div className='popularUsersList'>
//         {popularUsers && popularUsers.map((user) => (
//           <div key={user.id} className='popularUserCard'>
//             <img 
//               src={user.profilePicture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} // Use fallback image if profilePicture is missing
//               alt={user.username} 
//               onError={(e) => { e.target.src = fallbackImage; }} // Fallback image on error
//             />
//             <p>{user.name}</p>
//             <p>@{user.username}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeRight;




// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPopularUser } from '../Redux/User/Action';
// import SuggestionCard from './SuggestionCard'; // Ensure the path is correct

// const HomeRight = () => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem('token');
  
//   const popularUsers = useSelector((store) => store.user.popularUsers || []); 

//   useEffect(() => {
//     if (token) {
//       dispatch(getPopularUser(token));
//     }
//   }, [dispatch, token]);

//   const handleFollow = (userId) => {
//     // Implement the follow functionality here
//     console.log(`Follow user with ID: ${userId}`);
//   };

//   return (
//     <div className='homeRightContainer'>
//       <h2>Popular Users</h2>
//       <div className='popularUsersList'>
//         {popularUsers.length > 0 ? (
//           popularUsers.map((user) => (
//             <SuggestionCard key={user.id} user={user} onFollow={handleFollow} />
//           ))
//         ) : (
//           <p></p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeRight;



import React, { useState } from 'react';
import SuggestionCard from './SuggestionCard'; // Ensure the path is correct

const HomeRight = () => {
  const [users, setUsers] = useState([
    // Example users
    { id: 1, profilePicture: 'https://example.com/image1.jpg', name: '', username: '', isFollowing: true },
    { id: 2, profilePicture: 'https://example.com/image2.jpg', name: '', username: '', isFollowing: true }
    
  ]);

  const handleFollow = (userId) => {
    console.log(`Follow user with ID: ${userId}`);
    // Implement follow functionality here
  };

  return (
    <div>
      <h2>Suggestions</h2>
      {users.map(user => (
        <SuggestionCard key={user.id} user={user} onFollow={handleFollow} />
      ))}
    </div>
  );
};

export default HomeRight;
