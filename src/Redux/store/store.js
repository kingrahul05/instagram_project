import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {authReducer} from '../Auth/Reducer';
//import {UserReducer} from '../User/Reducer';
//import {PostReducer} from '../Post/Reducer';
import {CommentReducer} from '../Comment/Reducer';
import {thunk} from 'redux-thunk';
import PostReducer from '../Post/Reducer';  // Import default export
import { UserReducer } from '../User/Reducer';  // Correct if named export











const rootReducer = combineReducers({   
  auth: authReducer,
  user: UserReducer,
  post: PostReducer,
  comment: CommentReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;


//  import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// import {authReducer} from '../Auth/Reducer';
// import {UserReducer} from '../User/Reducer';
// import {PostReducer} from '../Post/Reducer';
// import {CommentReducer} from '../Comment/Reducer';
// import {thunk} from 'redux-thunk';
// import { createStore } from 'redux';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: UserReducer,
//   post: PostReducer,
//   comment: CommentReducer,
// });

// const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// export default store;





// import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { authReducer } from '../Auth/Reducer';
// import { UserReducer } from '../User/Reducer';
// import { PostReducer } from '../Post/Reducer';
// import { CommentReducer } from '../Comment/Reducer';

// // Combine all reducers into a root reducer
// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: UserReducer,
//   post: PostReducer,
//   comment: CommentReducer,
// });

// // Create the Redux store with the root reducer and middleware
// const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// export default store;


