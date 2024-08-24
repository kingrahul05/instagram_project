// import { GET_USER_BY_USERNAME, GET_USERS_BY_USER_IDS, REQ_USER, FOLLOW_USER, UNFOLLOW_USER, SEARCH_USER, UPDATE_USER } from "./ActionType";

// const initialValue = {
//     users: null,
//     reqUser: null,
//     findByUsername:null,
//     findUserByIds:[],
//     followUser:null,
//     unfollowUser:null,
//     serachUser:null,
//     updateUser:null,



   
// };

// export const UserReducer = (store = initialValue,{type,payload}) => {



//     if(type===REQ_USER){
//         return{...store,reqUser:payload}
//     }
//     else if(type===GET_USER_BY_USERNAME){
//         return{...store,findByUsername:payload}
//     }
//     else if(type===GET_USERS_BY_USER_IDS){
//         return{...store,findUserByIds:payload}
//     }
//     else if(type===FOLLOW_USER){
//         return{...store,followUser:payload}
//     }
//     else if(type===UNFOLLOW_USER){
//         return{...store,unfollowUser:payload}
//     }
//     else if(type===SEARCH_USER){
//         return{...store,serachUser:payload}
//     }
//     else if(type===UPDATE_USER){
//         return{...store,updateUser:payload}
//     }


    


// }



// import { GET_USER_BY_USERNAME, GET_USERS_BY_USER_IDS, REQ_USER, FOLLOW_USER, UNFOLLOW_USER, SEARCH_USER, UPDATE_USER } from "./ActionType";

// const initialValue = {
//     users: null,
//     reqUser: null,
//     findByUsername:null,
//     findUserByIds:[],
//     followUser:null,
//     unfollowUser:null,
//     serachUser:null,
//     updateUser:null,



   
// };

// export const UserReducer = (store = initialValue,{type,payload}) => {



//     if(type===REQ_USER){
//         return{...store,reqUser:payload}
//     }
//     else if(type===GET_USER_BY_USERNAME){
//         return{...store,findByUsername:payload}
//     }
//     else if(type===GET_USERS_BY_USER_IDS){
//         return{...store,findUserByIds:payload}
//     }
//     else if(type===FOLLOW_USER){
//         return{...store,followUser:payload}
//     }
//     else if(type===UNFOLLOW_USER){
//         return{...store,unfollowUser:payload}
//     }
//     else if(type===SEARCH_USER){
//         return{...store,serachUser:payload}
//     }
//     else if(type===UPDATE_USER){
//         return{...store,updateUser:payload}
        
//     }


    


// }



// src/Redux/Comment/Reducer.js
// import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from './ActionType';

// const initialValue = {
//   createComment: null,
//   postComment: null,
//   likeComment: null,
//   unlikeComment: null,
// };

// export const CommentReducer = (state = initialValue, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CREATE_COMMENT:
//       return { ...state, createComment: payload };
//     case GET_POST_COMMENT:
//       return { ...state, postComment: payload };
//     case LIKE_COMMENT:
//       return { ...state, likeComment: payload };
//     case UNLIKE_COMMENT:
//       return { ...state, unlikeComment: payload };
//     default:
//       return state;
//   }
// };

// import { 
//     GET_USER_PROFILE, 
//     UPDATE_USER_PROFILE, 
//     FOLLOW_USER, 
//     UNFOLLOW_USER 
//   } from './ActionType';
  
//   const initialState = {
//     userProfile: null,
//     updatedProfile: null,
//     followedUsers: [],
//     unfollowedUsers: [],
//   };
  
//   export const UserReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case GET_USER_PROFILE:
//         return { ...state, userProfile: payload };
//       case UPDATE_USER_PROFILE:
//         return { ...state, updatedProfile: payload };
//       case FOLLOW_USER:
//         return { ...state, followedUsers: [...state.followedUsers, payload] };
//       case UNFOLLOW_USER:
//         return { 
//           ...state, 
//           followedUsers: state.followedUsers.filter(user => user.id !== payload.id) 
//         };
//       default:
//         return state;
//     }
//   };
  


// import { 
//     GET_USER_BY_USERNAME, 
//     GET_USERS_BY_USER_IDS, 
//     REQ_USER, 
//     FOLLOW_USER, 
//     UNFOLLOW_USER, 
//     SEARCH_USER, 
//     UPDATE_USER 
//     POPULER_USER,
//   } from './ActionType';
  
//   const initialState = {
//     userProfile: null,        // For storing user profile
//     userByUsername: null,     // For storing user fetched by username
//     usersByIds: [],           // For storing users fetched by user IDs
//     searchUser: null,         // For storing search results
//     followedUsers: [],        // For storing followed users
//     unfollowedUsers: [],      // For storing unfollowed users
//     updatedUser: null         // For storing updated user profile
//   };
  
//   export const UserReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case REQ_USER:
//         return { ...state, userProfile: payload };
//       case GET_USER_BY_USERNAME:
//         return { ...state, userByUsername: payload };
//       case GET_USERS_BY_USER_IDS:
//         return { ...state, usersByIds: payload };
//       case SEARCH_USER:
//         return { ...state, searchUser: payload };
//       case FOLLOW_USER:
//         return { ...state, followedUsers: [...state.followedUsers, payload] };
//       case UNFOLLOW_USER:
//         return { 
//           ...state, 
//           followedUsers: state.followedUsers.filter(user => user.id !== payload.id) 
//         };
//       case UPDATE_USER:
//         return { ...state, updatedUser: payload };
//       default:
//         return state;


        
//     }
    
//   };


import { 
  GET_USER_BY_USERNAME, 
  GET_USERS_BY_USER_IDS, 
  REQ_USER, 
  FOLLOW_USER, 
  UNFOLLOW_USER, 
  SEARCH_USER, 
  UPDATE_USER, 
  POPULER_USER,
} from './ActionType';

const initialState = {
  userProfile: null,        // For storing user profile
  userByUsername: null,     // For storing user fetched by username
  usersByIds: [],           // For storing users fetched by user IDs
  searchUser: null,         // For storing search results
  followedUsers: [],        // For storing followed users
  unfollowedUsers: [],      // For storing unfollowed users
  updatedUser: null,        // For storing updated user profile
  popularUsers: [],         // For storing popular users
};

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQ_USER:
      return { ...state, userProfile: payload };
    case GET_USER_BY_USERNAME:
      return { ...state, userByUsername: payload };
    case GET_USERS_BY_USER_IDS:
      return { ...state, usersByIds: payload };
    case SEARCH_USER:
      return { ...state, searchUser: payload };
    case FOLLOW_USER:
      return { ...state, followedUsers: [...state.followedUsers, payload] };
    case UNFOLLOW_USER:
      return { 
        ...state, 
        followedUsers: state.followedUsers.filter(user => user.id !== payload.id) 
      };
    case UPDATE_USER:
      return { ...state, updatedUser: payload };
    case POPULER_USER:
      return { ...state, popularUsers: payload }; // Add this case to handle popular users
    default:
      return state;
  }
};

  