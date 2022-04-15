import React, { useReducer, useContext } from "react";
import axios from "axios";
import userReducer from "./userReducer";
import userContext from "./userContext";

import Routes from "../../../routes.js";

import { userConstants } from "../constants";

const UserState = props => {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    loading: false,
    showingUserProfile: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  //ACTIONS

  //Set Loading
  const setLoading = () => dispatch({ type: userConstants.SET_LOADING });

  //Sign In
  const signIn = async (email, password) => {
    setLoading();
    console.log(email, password);

    try {
      const res = await axios.post(Routes.User.SignIn, { email, password });
      if (res.data.error) throw res.data.error;

      const user = res.data.user;
      const token = res.data.token;
      dispatch({
        type: userConstants.SIGN_IN,
        payload: { user, token },
      });

      //Save to local storage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", true);

      //Return message for the notification
      return res.data.message;
    } catch (err) {
      throw err;
    }
  };

  //Add User
  const signUp = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    setLoading();
    console.log(firstName, lastName, email, password, confirmPassword);

    try {
      if (password !== confirmPassword) throw "ERROR";
      const res = await axios.post(Routes.User.SignUp, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      console.log(res.data);

      if (res.data.error) throw res.data.error;

      const user = res.data.user;
      const token = res.data.token;
      dispatch({
        type: userConstants.SIGN_IN,
        payload: { user, token },
      });

      //Save to local storage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", true);

      //Return message for the notification
      return res.data.message;
    } catch (err) {
      throw err;
    }
  };

  //Sign the user out
  const signOut = () => {
    setLoading();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
    dispatch({ type: userConstants.SIGN_OUT });
  };

  const getProfile = async id => {
    setLoading();
    try {
      const res = await axios.get(Routes.User.GetUser + "/" + id);
      if (res.data.error) throw res.data.error;

      const user = res.data.user;

      dispatch({
        type: userConstants.GET_PROFILE,
        payload: { user },
      });

      return res.data.message;
    } catch (err) {
      throw err;
    }
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        showingUserProfile: state.showingUserProfile,
        loading: state.loading,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        getProfile: getProfile,
      }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
