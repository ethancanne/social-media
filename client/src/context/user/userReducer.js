import { userConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        loading: false,
      };

    case userConstants.SIGN_OUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false,
        loading: false,
      };

    case userConstants.GET_PROFILE:
      return {
        ...state,
        showingUserProfile: action.payload.user,
        loading: false,
      };

    case userConstants.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
