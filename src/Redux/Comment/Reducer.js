// // import { createContext } from "react"
// // import store from "../store/store"
// // import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType"

// // const initialValue={
// //     createComment:null,
// //     postComment:null,
// //     likeComment:null,
// //     unlikeComment:null,


// // }

// // export const CommentReducer=(store=initialValue,{type,payload})=>{


// //     if(type===CREATE_COMMENT){
// //         return{...store, createComment:payload}
// //     }
// //     else if(type===GET_POST_COMMENT){
// //         return{...store,postComment:payload}
// //     }
// //     else if(type===LIKE_COMMENT){
// //         return{...store,likeComment:payload}
// //     }
// //     else if(type===UNLIKE_COMMENT){
// //         return{...store,unlikeComment:payload}
// //     }


// // }



// import { createContext } from "react";
// import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

// const initialValue = {
//   createComment: null,
//   postComment: null,
//   likeComment: null,
//   unlikeComment: null,
// };

// export const CommentReducer = (state = initialValue, { type, payload }) => {
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

// export const CommentContext = createContext(initialValue);

// export const CommentProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(CommentReducer, initialValue);

//   return (
//     <CommentContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CommentContext.Provider>
//   );
// };




import { createContext, useReducer } from "react"; // Import useReducer
import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

const initialValue = {
  createComment: null,
  postComment: null,
  likeComment: null,
  unlikeComment: null,
};

export const CommentReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case CREATE_COMMENT:
      return { ...state, createComment: payload };
    case GET_POST_COMMENT:
      return { ...state, postComment: payload };
    case LIKE_COMMENT:
      return { ...state, likeComment: payload };
    case UNLIKE_COMMENT:
      return { ...state, unlikeComment: payload };
    default:
      return state;
  }
};

export const CommentContext = createContext(initialValue);

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CommentReducer, initialValue);

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};
 