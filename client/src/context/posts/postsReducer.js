import { postsConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case postsConstants.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case postsConstants.GET_FEED:
      return {
        ...state,
        feed: action.payload,
        isLoading: false,
      };

    case postsConstants.GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
