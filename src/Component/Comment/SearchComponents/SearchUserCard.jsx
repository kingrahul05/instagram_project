// import React from 'react'

// const SearchUserCard = ({user}) => {
//   return (
//     <div className='py-2 cursor-pointer'>
//         <div className='flex items-center'>
//             <img  className="w-10 h-10 rounded-full"  src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />

//             <div className='ml-3'>
//                 <p>{user.name}</p>
//                 <p className='opacity-70'>{user.username}</p>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SearchUserCard




import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SearchUserCard = ({ user }) => {
  const navigate=useNavigate();
  console.log('SearchUserCard user:', user);

  return (
    <div onClick={()=>navigate('/${use.username}')} className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img
          className="w-10 h-10 rounded-full"
          src={user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
          alt={user.username}
        />
        <div className='ml-3'>
          <p>{user.name}</p>
          <p className='opacity-70'>{user.username}</p>
        </div>
      </div>
    </div>
  );
};

SearchUserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
  }).isRequired,
};

export default SearchUserCard;
