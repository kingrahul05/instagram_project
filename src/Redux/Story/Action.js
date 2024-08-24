// Action.js
import { FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORY } from './ActionType';

// const BASE API="";

// Action to fetch the stories of the users that the current user is following
export const fetchFollowingUserStory = (followingUserId) => async (dispatch) => {
  try {
    // Replace with actual API call
    const response = await fetch(`/api/stories/following/${followingUserId}`);
    const data = await response.json();

    dispatch({
      type: FETCH_FOLLOWING_USER_STORY,
      payload: data,
    });
  } catch (error) {
    console.error("Failed to fetch following user's stories", error);
  }
};

// Action to fetch the stories of a specific user
export const fetchUserStory = (userId) => async (dispatch) => {
  try {
    // Replace with actual API call
    const response = await fetch(`/api/stories/user/${userId}`);
    const data = await response.json();

    dispatch({
      type: FETCH_USER_STORY,
      payload: data,
    });
  } catch (error) {
    console.error('Failed to fetch user stories', error);
  }
};
