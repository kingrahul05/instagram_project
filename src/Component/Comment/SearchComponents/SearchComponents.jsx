// import React, { useEffect } from 'react'
// import "./SearchComponents.css"
// import SearchUserCard from './SearchUserCard'
// import { useAccordion } from '@chakra-ui/react'
// import { useDispatch, useSelector } from 'react-redux'
// import { searchUserAction } from '../../../Redux/User/Action'


// const SearchComponents = () => {
//   const dispatch=useDispatch();
//   const token = localStorage.getItem("token");

//   const {user}=useSelector(store=>store);


 
//     dispatch(searchUserAction())

//     const handleSearch=(e)=>{
//       dispatch({jwt:token,query:e.traget.value})
//     }
  
//   return (
//     <div className='searchContainer'>
//         <div className='px-3 pb-5'>
//             <h1 className='text-xl pb-5'>Search</h1>
//             <input onChange={handlesearch} className='searchInput' type="text" placeholder='Search..'/>
//         </div>

//         <hr />

//         <div className='px-3 pt-5'>
//             {user.searchUser?.map((item)=><SearchUserCard user={item}/>)}
//         </div>
//     </div>
//   )
// }

// export default SearchComponents





// import React, { useEffect } from 'react';
// import "./SearchComponents.css";
// import SearchUserCard from './SearchUserCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchUserAction } from '../../../Redux/User/Action';

// const SearchComponents = () => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem("token");
//   const { user } = useSelector(store => store);

//   // Move searchUserAction to useEffect
//   useEffect(() => {
//     dispatch(searchUserAction());
//   }, [dispatch]);

//   // Correct handleSearch function
//   const handleSearch = (e) => {
//     dispatch(searchUserAction({ jwt: token, query: e.target.value }));
//   };

//   return (
//     <div className='searchContainer'>
//       <div className='px-3 pb-5'>
//         <h1 className='text-xl pb-5'>Search</h1>
//         <input onChange={handleSearch} className='searchInput' type="text" placeholder='Search..' />
//       </div>

//       <hr />

//       <div className='px-3 pt-5'>
//         {user.searchUser?.map((item) => <SearchUserCard key={item.id} user={item} />)}
//       </div>
//     </div>
//   );
// }

// export default SearchComponents;




import React, { useEffect, useState } from 'react';
import './SearchComponents.css';
import SearchUserCard from './SearchUserCard';
import { useDispatch, useSelector } from 'react-redux';
import { searchUserAction } from '../../../Redux/User/Action';

const SearchComponents = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user } = useSelector(store => store);

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim() !== '') {
      dispatch(searchUserAction({ jwt: token, query }));
    }
  }, [dispatch, token, query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  console.log('user.searchUser:', user.searchUser);

  return (
    <div className='searchContainer'>
      <div className='px-3 pb-5'>
        <h1 className='text-xl pb-5'>Search</h1>
        <input
          onChange={handleSearch}
          value={query}
          className='searchInput'
          type='text'
          placeholder='Search..'
        />
      </div>

      <hr />

      <div className='px-3 pt-5'>
        {user.searchUser?.map((item) => (
          <SearchUserCard key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchComponents;
