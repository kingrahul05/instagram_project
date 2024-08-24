// import { SIGN_IN, SIGN_UP } from "./ActionType";  

// export const signinAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch("YOUR_SIGNIN_URL", {  
//             method: "POST", // Change to POST
//             headers: {
//                 "Content-Type": "application/json",  
//                 Authorization: "Basic " + btoa(data.email + ":" + data.password),
//             },
//         });

//         if (!res.ok) {
//             throw new Error('Sign-in failed');
//         }

//         const result = await res.json(); // Assuming the token is in the response body
//         const token = result.token; // Adjust based on your API response structure
//         localStorage.setItem("token", token);

//         console.log("signin token:", token);
//         dispatch({ type: SIGN_IN, payload: token });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const signupAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch("YOUR_SIGNUP_URL", {  
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",  
//             },
//             body: JSON.stringify(data)
//         });

//         if (!res.ok) {
//             throw new Error('Sign-up failed');
//         }

//         const user = await res.json();
//         console.log("signup user:", user);
//         dispatch({ type: SIGN_UP, payload: user });
//     } catch (error) {
//         console.log(error);
//     }
// };




// import { SIGN_IN, SIGN_UP } from "./ActionType";  

// export const signinAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch("http://localhost:8080/api/auth/signin", {  // Replace with your actual sign-in URL
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Basic " + btoa(data.email + ":" + data.password),
//             },
//         });

//         if (!res.ok) {
//             // Handle non-2xx responses (e.g., 400, 500 errors)
//             const error = await res.text();
//             throw new Error(`Sign-in failed: ${error}`);
//         }

//         const result = await res.json(); // Adjust based on your API response structure
//         const token = result.token; // Ensure this matches your API's response

//         if (!token) {
//             throw new Error('No token received from the server');
//         }

//         localStorage.setItem("token", token);

//         console.log("signin token:", token);
//         dispatch({ type: SIGN_IN, payload: token });
//     } catch (error) {
//         console.error("Signin error:", error);
//         // Optionally, you can dispatch an error action or show a notification here
//     }
// };

// export const signupAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch("http://localhost:8080/api/auth/signup", {  // Replace with your actual sign-up URL
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (!res.ok) {
//             // Handle non-2xx responses (e.g., 400, 500 errors)
//             const error = await res.text();
//             throw new Error(`Sign-up failed: ${error}`);
//         }

//         const user = await res.json();
//         console.log("signup user:", user);
//         dispatch({ type: SIGN_UP, payload: user });
//     } catch (error) {
//         console.error("Signup error:", error);
//         // Optionally, you can dispatch an error action or show a notification here
//     }
// };


import { SIGN_IN, SIGN_UP } from "./ActionType";  

// Updated signinAction
export const signinAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Remove Authorization if your backend does not use Basic Auth
                // Authorization: "Basic " + btoa(data.email + ":" + data.password),
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });

        if (!res.ok) {
            const error = await res.text();
            console.error(`Sign-in failed: ${error}`);
            throw new Error(`Sign-in failed: ${error}`);
        }

        const result = await res.json();
        const token = result.token;

        if (!token) {
            throw new Error('No token received from the server');
        }

        localStorage.setItem("token", token);

        console.log("signin token:", token);
        dispatch({ type: SIGN_IN, payload: token });
    } catch (error) {
        console.error("Signin error:", error);
    }
};

// Updated signupAction
export const signupAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.text();
            console.error(`Sign-up failed: ${error}`);
            throw new Error(`Sign-up failed: ${error}`);
        }

        const user = await res.json();
        console.log("signup user:", user);
        dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
        console.error("Signup error:", error);
    }
};
