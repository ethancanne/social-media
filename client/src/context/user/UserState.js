import React, { useReducer } from "react";
import axios from "axios";
import userReducer from "./userReducer";
import UserContext from "./userContext";
import Routes from "../../../routes.js";

import { userConstants, notificationConstants } from "../constants";

const UserState = props => {
  const initialState = {
    user: {},
    token: [],
    isLoggedIn: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  //ACTIONS

  //Set Loading
  const setLoading = () => dispatch({ type: userConstants.SET_LOADING });

  //Get user repos
  const signIn = async (email, password) => {
    setLoading();
    console.log(email, password);

    // const res = axios.post(Routes.User.SignIn, { email, password });

    //Save to local storage

    dispatch({
      type: userConstants.SIGN_IN,
      payload: {},
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        signIn: signIn,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
