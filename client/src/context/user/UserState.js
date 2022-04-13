import React, { useReducer } from "react";
import axios from "axios";
import userReducer from "./userReducer";
import UserContext from "./userContext";
import Routes from "../../../routes.js";

import { userConstants } from "../constants";

const UserState = props => {
  const initialState = {
    user: {},
    token: [],
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    loading: false,
    showingUserProfile: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  //ACTIONS

  //Set Loading
  const setLoading = () => dispatch({ type: userConstants.SET_LOADING });

  //Set User
  const signIn = async (email, password) => {
    setLoading();
    console.log(email, password);

    try {
      const res = await axios.post(Routes.User.SignIn, { email, password });
      dispatch({
        type: userConstants.SIGN_IN,
        payload: { user, token },
      });
    } catch {
      throw "ERROR";
    }

    //Save to local storage
    // const loggedInUser = res.data.user;
    // loggedInUser.token = res.data.token;

    // localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("isLoggedIn", true);
  };

  //Sign the user out
  const signOut = () => {
    setLoading();
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    dispatch({ type: userConstants.SIGN_OUT });
  };

  const getProfile = async (id, loggedInUser = undefined) => {
    setLoading();
    try {
      if (!loggedInUser) {
        const res = await axios.post(Routes.User.GetProfile, { id });
        const { user } = res.data;

        dispatch({
          type: userConstants.GET_PROFILE,
          payload: { user },
        });
      } else {
        dispatch({
          type: userConstants.GET_PROFILE,
          payload: { loggedInUser },
        });
      }
    } catch {
      throw "ERROR";
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        showingUserProfile: state.showingUserProfile,
        loading: state.loading,
        signIn: signIn,
        signOut: signOut,
        getProfile: getProfile,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
