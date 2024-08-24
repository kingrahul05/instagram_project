// import { GET_USER_BY_USERNAME, GET_USERS_BY_USER_IDS, REQ_USER } from "./ActionType";
// import { FOLLOW_USER, UNFOLLOW_USER,SEARCH_USER,UPDATE_USER  } from './ActionType';


// const BASE_API_=""

// export const getUserprofileAction = (jwt) => async (dispatch) => {
//     try {
//         const res = await fetch("YOUR_GET_USER_URL", { // Replace with your actual URL
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + jwt,
//             },
//         });

//         if (!res.ok) {
//             throw new Error('Failed to fetch user profile');
//         }

//         const reqUser = await res.json();
//         dispatch({ type: REQ_USER, payload: reqUser });
//     } catch (error) {
//         console.log("catch :", error);
//     }
// };

//  export const findUserByUserNameAction=(data)=>async(dispatch)=>{

//     const res=await fetch('${BASE_API}/users/username/${data.username}',{
//         method:"GET",
//         headers:{
//             "content-Type":"application/json",
//             Authorization:"Bearer "+data.jwt
//         }
//     });

//     const user=await res.json();

//     console.log("find by username:",user)
//     dispatch({type:GET_USER_BY_USERNAME,payload:user});

// }


// export const findUserByUserIdsAction=(data)=>async(dispatch)=>{

//     const res=await fetch('${BASE_API}/users/m/${data.userIds}',{
//         method:"GET",
//         headers:{
//             "content-Type":"application/json",
//             Authorization:"Bearer "+data.jwt
//         }
//     });

//     const users=await res.json();

//     console.log("find by user ids:",users)
//     dispatch({type:GET_USERS_BY_USER_IDS,payload:users});

// }

// export const followUserAction=(data)=>async(dispatch)=>{

//     const res=await fetch('${BASE_API}/users/follow/${data.userId}',{
//         method:"PUT",
//         headers:{
//             "content-Type":"application/json",
//             Authorization:"Bearer "+data.jwt
//         }
//     });

//     const user=await res.json();

//     console.log("follow user:",user)
//     dispatch({type:FOLLOW_USER,payload:user});

// }


// export const unFollowUserAction=(data)=>async(dispatch)=>{

//     const res=await fetch('${BASE_API}/users/unfollow/${data.userId}',{
//         method:"PUT",
//         headers:{
//             "content-Type":"application/json",
//             Authorization:"Bearer "+data.jwt
//         }
//     });

//     const user=await res.json();

//     console.log("un follow user:",user)
//     dispatch({type:UNFOLLOW_USER,payload:user});

// }

// export const searchUserAction=(data)=>async(dispatch)=>{

//  try{
//     const res=await fetch('${BASE_API}/users/search?q=${data.query}',{
//         method:"GET",
//         headers:{
//             "content-Type":"application/json",
//             Authorization:"Bearer "+data.jwt
//         }
//     });

//     const user=await res.json();

//     console.log("search user:",user)
//     dispatch({type:SEARCH_USER,payload:user});


//  }catch(error){

//     console.log("catch error ",error)

//  }

// }


// export const editUserAction=(data)=>async(dispatch)=>{

//     try{
//        const res=await fetch('${BASE_API}/users/account/edit',{
//            method:"Put",
//            headers:{
//                "content-Type":"application/json",
//                Authorization:"Bearer "+data.jwt
//            },
//            body:JSON.stringify(data.data)
//        });
   
//        const user=await res.json();
   
//        console.log("search user:",user)
//        dispatch({type:UPDATE_USER,payload:user});
   
   
//     }catch(error){
   
//        console.log("catch error ",error)
   
//     }
   
//    }






// import { 
//     GET_USER_BY_USERNAME, 
//     GET_USERS_BY_USER_IDS, 
//     REQ_USER, 
//     FOLLOW_USER, 
//     UNFOLLOW_USER, 
//     SEARCH_USER, 
//     UPDATE_USER  
// } from "./ActionType";

// const BASE_API_ = ""; // Add your base API URL here

// export const getUserprofileAction = (jwt) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/your-get-user-url`, { // Replace with your actual URL
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + jwt,
//             },
//         });

//         if (!res.ok) {
//             throw new Error('Failed to fetch user profile');
//         }

//         const reqUser = await res.json();
//         dispatch({ type: REQ_USER, payload: reqUser });
//     } catch (error) {
//         console.log("catch :", error);
//     }
// };

// export const findUserByUserNameAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/username/${data.username}`, {
//             method: "GET",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             }
//         });

//         const user = await res.json();

//         console.log("find by username:", user);
//         dispatch({ type: GET_USER_BY_USERNAME, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };

// export const findUserByUserIdsAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/m/${data.userIds}`, {
//             method: "GET",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             }
//         });

//         const users = await res.json();

//         console.log("find by user ids:", users);
//         dispatch({ type: GET_USERS_BY_USER_IDS, payload: users });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };

// export const followUserAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/follow/${data.userId}`, {
//             method: "PUT",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             }
//         });

//         const user = await res.json();

//         console.log("follow user:", user);
//         dispatch({ type: FOLLOW_USER, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };

// export const unFollowUserAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/unfollow/${data.userId}`, {
//             method: "PUT",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             }
//         });

//         const user = await res.json();

//         console.log("unfollow user:", user);
//         dispatch({ type: UNFOLLOW_USER, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };

// export const searchUserAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/search?q=${data.query}`, {
//             method: "GET",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             }
//         });

//         const user = await res.json();

//         console.log("search user:", user);
//         dispatch({ type: SEARCH_USER, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };

// export const editUserAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/account/edit`, {
//             method: "PUT",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " + data.jwt
//             },
//             body: JSON.stringify(data.data)
//         });

//         const user = await res.json();

//         console.log("edited user:", user);
//         dispatch({ type: UPDATE_USER, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };


// ///  URL in api


// export const getPopularUser = (jwt) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_}/users/populer`, {
//             method: "GET",
//             headers: {
//                 "content-Type": "application/json",
//                 Authorization: "Bearer " +jwt
//             },
           
//         });

//         const user = await res.json();

//         console.log("edited user:", user);
//         dispatch({ type: POPULER_USER, payload: user });
//     } catch (error) {
//         console.log("catch error:", error);
//     }
// };




import { 
    GET_USER_BY_USERNAME, 
    GET_USERS_BY_USER_IDS, 
    REQ_USER, 
    FOLLOW_USER, 
    UNFOLLOW_USER, 
    SEARCH_USER, 
    UPDATE_USER,
    POPULER_USER // Added missing import
} from "./ActionType";

const BASE_API_ = ""; // Add your base API URL here

export const getUserprofileAction = (jwt) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/your-get-user-url`, { // Replace with your actual URL
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt,
            },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch user profile');
        }

        const reqUser = await res.json();
        dispatch({ type: REQ_USER, payload: reqUser });
    } catch (error) {
        console.log("catch :", error);
    }
};

export const findUserByUserNameAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/username/${data.username}`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        });

        const user = await res.json();

        console.log("find by username:", user);
        dispatch({ type: GET_USER_BY_USERNAME, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const findUserByUserIdsAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/m/${data.userIds}`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        });

        const users = await res.json();

        console.log("find by user ids:", users);
        dispatch({ type: GET_USERS_BY_USER_IDS, payload: users });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const followUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/follow/${data.userId}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        });

        const user = await res.json();

        console.log("follow user:", user);
        dispatch({ type: FOLLOW_USER, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const unFollowUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/unfollow/${data.userId}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        });

        const user = await res.json();

        console.log("unfollow user:", user);
        dispatch({ type: UNFOLLOW_USER, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const searchUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/search?q=${data.query}`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        });

        const user = await res.json();

        console.log("search user:", user);
        dispatch({ type: SEARCH_USER, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const editUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/account/edit`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        });

        const user = await res.json();

        console.log("edited user:", user);
        dispatch({ type: UPDATE_USER, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};

export const getPopularUser = (jwt) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_}/users/populer`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " +jwt
            },
        });

        const user = await res.json();

        console.log("popular user:", user);
        dispatch({ type: POPULER_USER, payload: user });
    } catch (error) {
        console.log("catch error:", error);
    }
};
