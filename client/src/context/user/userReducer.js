import { userConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN:
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoggedIn: true,
        loading: false,
      };

    case userConstants.SIGN_OUT:
      return {
        ...state,
        user: "",
        token: "",
        isLoggedIn: false,
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
