// import Signup from "../../Component/Rester/Signup";
// import { SIGN_IN, SIGN_UP } from "./ActionType";

// const initialValue = {
//     isAuthenticated: false,
//     signup: null,
//     signin: null,
    
//     user: null
// };

// export const authReducer = (store = initialValue, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case SIGN_IN:
//             return { ...store,isAuthenticated: true, signin: payload };
//         case SIGN_UP:
//             return { ...store, isAuthenticated: false , Signup: payload };
//         default:
//             return store;
//     }
// };



import { SIGN_IN, SIGN_UP } from "./ActionType";

const initialValue = {
    isAuthenticated: false,
    signup: null,
    signin: null,
    user: null,
};

export const authReducer = (store = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
            return { ...store, isAuthenticated: true, signin: payload };
        case SIGN_UP:
            return { ...store, isAuthenticated: true, signup: payload }; // Updated 'Signup' to 'signup'
        default:
            return store;
    }
};
