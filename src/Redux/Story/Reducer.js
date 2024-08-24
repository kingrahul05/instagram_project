// Reducer.js
import { FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORY } from './ActionType';

const initialState = {
  followingUserStories: [],
  userStories: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWING_USER_STORY:
      return {
        ...state,
        followingUserStories: action.payload,
      };

    case FETCH_USER_STORY:
      return {
        ...state,
        userStories: action.payload,
      };

    default:
      return state;
  }
};

export default storyReducer;
