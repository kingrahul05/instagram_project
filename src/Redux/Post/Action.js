// import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

// const BASE_API_=""

// export const createPostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/create',{
//             method:"Post",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
//             body:JSON.stringify(data.data),
//         })
    
//         const post=await res.json();
    
//         dispatch({type:CREATE_NEW_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }

    


// }


// export const findUserPostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/following/${data.userIds}',{
//             method:"GET",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const posts=await res.json();


//         console.log("find post by user ids ",posts)
    
//         dispatch({type:GET_USER_POST,payload:posts});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };


// export const reqUserPostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/following/${data.userIds}',{
//             method:"GET",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const posts=await res.json();


//         console.log("req User post ",posts)
    
//         dispatch({type:REQ_USER_POST,payload:posts});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };


// export const likePostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/like/${data.postIds}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const posts=await res.json();


//         console.log("like post ",posts)
    
//         dispatch({type:LIKE_POST,payload:posts});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };


// export const unlikePostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/unlike/${data.postIds}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const post=await res.json();


//         console.log("unlike post ",post)
    
//         dispatch({type:UNLIKE_POSTLIKE_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };



// export const savePostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/save_post/${data.postIds}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const post=await res.json();


//         console.log("saved post ",post)
    
//         dispatch({type:SAVE_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };


// export const unSavePostAction=(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/unsave_post/${data.postIds}',{
//             method:"PUT",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const post=await res.json();


//         console.log("unsaved post ",post)
    
//         dispatch({type:UNSAVE_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };



// export const findPostByIdAction =(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/${data.postIds}',{
//             method:"GET",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const post=await res.json();


//         console.log("get single post ",post)
    
//         dispatch({type:GET_SINGLE_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };


// export const deletePostAction =(data)=>async(dispatch)=>{

//     try{

//         const res=await fetch('${BASE_API}/posts/delete/${data.postIds}',{
//             method:"DELETE",
//             headers:{
//                 "content-Type":"application/json",
//                 Authorization:"Bearer "+data.jwt
//             },
            
//         })
    
//         const post=await res.json();


//         console.log("deleted post ",post)
    
//         dispatch({type:DELETE_POST,payload:post});
//     }catch(error){

//         console.log("Catch ",error)
//     }
// };



import { 
  CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, 
  LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST 
} from "./ActionType";

const BASE_API = ""; // Define the correct base API URL here

export const createPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/create`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + data.jwt,
        ...(data.isFormData ? {} : { "Content-Type": "application/json" })
      },
      body: data.isFormData ? data.data : JSON.stringify(data.data),
    });

    const post = await res.json();
    console.log("created post ", post);
    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const findUserPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/following/${data.userIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const posts = await res.json();
    console.log("find post by user ids ", posts);
    dispatch({ type: GET_USER_POST, payload: posts });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const reqUserPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/following/${data.userIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const posts = await res.json();
    console.log("req User post ", posts);
    dispatch({ type: REQ_USER_POST, payload: posts });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const likePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/like/${data.postIds}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const posts = await res.json();
    console.log("like post ", posts);
    dispatch({ type: LIKE_POST, payload: posts });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unlikePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/unlike/${data.postIds}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();
    console.log("unlike post ", post);
    dispatch({ type: UNLIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const savePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/save_post/${data.postIds}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();
    console.log("saved post ", post);
    dispatch({ type: SAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unSavePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/unsave_post/${data.postIds}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();
    console.log("unsaved post ", post);
    dispatch({ type: UNSAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const findPostByIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/${data.postIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();
    console.log("get single post ", post);
    dispatch({ type: GET_SINGLE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const deletePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/delete/${data.postIds}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();
    console.log("deleted post ", post);
    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

