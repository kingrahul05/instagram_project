// import { useProgressStyles } from "@chakra-ui/react";
// import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

// const initialValue={
//     createPost:null,
//     userPost:[],
//     deletedPost:null,
//     likePost:null,
//     unlikePost:null,
//     savedPost:null,
//     unsavedPost:null,
//     singlePost:null,
// }


// export const PostReducer=(store=initialValue,{type,payload})=>{


//     if(type===CREATE_NEW_POST) {
//        return {...store,createPost:payload}
//     }
//     else if(type===GET_USER_POST){
//         return{...store,userPost:payload}
//     }
//     else if(type===DELETE_POST){
//         return{...store,deletedPost:payload}
//     }
//     else if(type===LIKE_POST){
//         return{...store,likePost:payload}
//     }
//     else if(type===UNLIKE_POST){
//         return{...store,unlikePost:payload}
//     }
//     else if(type===SAVE_POST){
//         return{...store,savePost:payload}
//     }
//     else if(type===UNSAVE_POST){
//       return {...store,unsavePost:payload}
//     }
//     else if(type===GET_SINGLE_POST){
//         return{...store,singlePost:payload}
//     }
    
    

// }



import { 
    CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, 
    LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST 
  } from "./ActionType";
  
  const initialState = {
    posts: [],
    post: null,
    userPosts: [],
    profilePost:null,
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NEW_POST:
        return { ...state, posts: [...state.posts, action.payload] };
      case GET_USER_POST:
        return { ...state, userPosts: action.payload };
      case DELETE_POST:
        return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) };
      case LIKE_POST:
        return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) };
      case UNLIKE_POST:
        return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) };
      case SAVE_POST:
        return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) };
      case UNSAVE_POST:
        return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) };
      case REQ_USER_POST:
        return { ...state, userPosts: action.payload };
      case GET_SINGLE_POST:
        return { ...state, post: action.payload };
      default:
        return state;
    }
  };
  
  export default postReducer;
  