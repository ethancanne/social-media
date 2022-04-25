import { userConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN:
      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        isLoading: false,
      };

    case userConstants.SIGN_OUT:
      return {
        ...state,
        loggedInUser: {},
        token: "",
        isLoggedIn: false,
        isLoading: false,
      };

    case userConstants.UPDATE_USER:
      return {
        ...state,
        loggedInUser: action.payload.user,
        isLoading: false,
      };
    case userConstants.GET_PROFILE:
      return {
        ...state,
        showingUserProfile: action.payload.user,
        isLoading: false,
      };
    case userConstants.REMOVE_PROFILE:
      return {
        ...state,
        showingUserProfile: {
          following: [],
          followers: [],
          posts: [],
          profilePicture: "",
        },
        isLoading: false,
      };

    case userConstants.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
