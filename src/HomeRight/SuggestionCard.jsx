// import React from 'react';

// const SuggestionCard = () => {
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex items-center">
//         <img 
//           className="w-9 h-9 rounded-full" 
//           src="https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_640.jpg" 
//           alt="suggested user" 
//         />
//         <div className="ml-2">
//           <p className="text-sm font-semibold">username</p>
//           <p className="text-sm font-semibold opacity-70">Follows you</p> {/* Fixed opacity-70m */}
//         </div>
//       </div>
//       <p className="text-blue-700 text-sm font-semibold">Follow</p>
//     </div>
//   );
// }

// export default SuggestionCard;



import React from 'react';

const SuggestionCard = ({ user, onFollow }) => {
  // Fallback image URL in case user.profilePicture is not available
  const fallbackImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'; 

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img 
          className="w-9 h-9 rounded-full"
          src={user.profilePicture || fallbackImage} 
          alt={user.username} 
          onError={(e) => { e.target.src = fallbackImage; }} // Set fallback image on error
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">{user.name || 'Username'}</p>
          <p className="text-sm font-semibold opacity-70">{user.isFollowing ? 'Follows you' : 'Not following you'}</p>
        </div>
      </div>
      <button
        className="text-blue-700 text-sm font-semibold"
        onClick={() => onFollow(user.id)}
      >
        Follow
      </button>
    </div>
  );
};

export default SuggestionCard;
