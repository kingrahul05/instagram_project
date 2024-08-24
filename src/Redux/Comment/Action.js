// import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

// BASE_API=""



// export const createCommentAction=(data)=>async(dispatch)=>{

//     try{
//         const res=await fetch('${BASE_API}/comments/create/${data.postId}',{
//             method:"POST",
//             headers:{
//                 "content-Type":"application/json", 
//                 Authorization:"Bearer "+data.jwt
//             },
//             body:JSON.stringify(data.data)
//         })
    
    
//         const comment=await res.json();
//         console.log("created comment ",comment)
//         dispatch({type:CREATE_COMMENT,payload:comment})
//     }catch(error){

//         console.log("catch",error)
//     } 
// };


// export const findPostCommentAction=(data)=>async(dispatch)=>{

//     try{
//         const res=await fetch('${BASE_API}/comments/${data.postId}',{
//             method:"GET",
//             headers:{
//                 "content-Type":"application/json", 
//                 Authorization:"Bearer "+data.jwt
//             },
           
//         })
    
    
//         const comment=await res.json();
//         console.log("find post comment ",comment)
//         dispatch({type:GET_POST_COMMENT,payload:comment})
//     }catch(error){

//         console.log("catch",error)
//     } 
// };


// export const likeCommentAction=(data)=>async(dispatch)=>{

//     try{
//         const res=await fetch('${BASE_API}/comments/like/${data.commentId}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json", 
//                 Authorization:"Bearer "+data.jwt
//             },
           
//         })
    
    
//         const comment=await res.json();
//         console.log("like comment ",comment)
//         dispatch({type:LIKE_COMMENT,payload:comment})
//     }catch(error){

//         console.log("catch",error)
//     } 
// };

// export const unlikeCommentAction=(data)=>async(dispatch)=>{

//     try{
//         const res=await fetch('${BASE_API}/comments/unlike/${data.commentId}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json", 
//                 Authorization:"Bearer "+data.jwt
//             },
           
//         })
    
    
//         const comment=await res.json();
//         console.log("unlike comment ",comment)
//         dispatch({type:UNLIKE_COMMENT,payload:comment})
//     }catch(error){

//         console.log("catch",error)
//     } 
// };



// import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

// const BASE_API = ""; // Define the correct base API URL here

// export const createCommentAction = (data) => async (dispatch) => {
//   try {
//     const res = await fetch(`${BASE_API}/comments/create/${data.postId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + data.jwt
//       },
//       body: JSON.stringify(data.data)
//     });

//     const comment = await res.json();
//     console.log("created comment ", comment);
//     dispatch({ type: CREATE_COMMENT, payload: comment });
//   } catch (error) {
//     console.log("catch", error);
//   }
// };

// export const findPostCommentAction = (data) => async (dispatch) => {
//   try {
//     const res = await fetch(`${BASE_API}/comments/${data.postId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + data.jwt
//       }
//     });

//     const comment = await res.json();
//     console.log("find post comment ", comment);
//     dispatch({ type: GET_POST_COMMENT, payload: comment });
//   } catch (error) {
//     console.log("catch", error);
//   }
// };

// export const likeCommentAction = (data) => async (dispatch) => {
//   try {
//     const res = await fetch(`${BASE_API}/comments/like/${data.commentId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + data.jwt
//       }
//     });

//     const comment = await res.json();
//     console.log("like comment ", comment);
//     dispatch({ type: LIKE_COMMENT, payload: comment });
//   } catch (error) {
//     console.log("catch", error);
//   }
// };

// export const unlikeCommentAction = (data) => async (dispatch) => {
//   try {
//     const res = await fetch(`${BASE_API}/comments/unlike/${data.commentId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + data.jwt
//       }
//     });

//     const comment = await res.json();
//     console.log("unlike comment ", comment);
//     dispatch({ type: UNLIKE_COMMENT, payload: comment });
//   } catch (error) {
//     console.log("catch", error);
//   }
// };



import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

const BASE_API = "https://your-api-url.com"; // Define the correct base API URL here

export const createCommentAction = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_API}/comments/create/${data.postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`
      },
      body: JSON.stringify(data.data)
    });

    if (!response.ok) {
      throw new Error('Failed to create comment');
    }

    const comment = await response.json();
    console.log("Created comment: ", comment);
    dispatch({ type: CREATE_COMMENT, payload: comment });
  } catch (error) {
    console.error("Error creating comment: ", error);
  }
};

export const findPostCommentAction = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_API}/comments/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const comments = await response.json();
    console.log("Fetched comments: ", comments);
    dispatch({ type: GET_POST_COMMENT, payload: comments });
  } catch (error) {
    console.error("Error fetching comments: ", error);
  }
};

export const likeCommentAction = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_API}/comments/like/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to like comment');
    }

    const comment = await response.json();
    console.log("Liked comment: ", comment);
    dispatch({ type: LIKE_COMMENT, payload: comment });
  } catch (error) {
    console.error("Error liking comment: ", error);
  }
};

export const unlikeCommentAction = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_API}/comments/unlike/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to unlike comment');
    }

    const comment = await response.json();
    console.log("Unliked comment: ", comment);
    dispatch({ type: UNLIKE_COMMENT, payload: comment });
  } catch (error) {
    console.error("Error unliking comment: ", error);
  }
};
