import React, { useReducer, useContext } from "react";
import axios from "axios";
import postsReducer from "./postsReducer";
import postsContext from "./postsContext";

import Routes from "../../../routes.js";

import { postsConstants } from "../constants";

const PostsState = props => {
  const initialState = { userPosts: [], feed: [], isLoading: false };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  //ACTIONS
  const getFeed = async () => {
    try {
      setLoading();
      const res = await axios.get(Routes.Post.GetFollowingPosts);
      dispatch({
        type: postsConstants.GET_FEED,
        payload: res.data.posts,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const getUserPosts = async id => {
    try {
      setLoading();
      const res = await axios.get(Routes.Post.GetUserPosts + "/" + id);
      dispatch({
        type: postsConstants.GET_USER_POSTS,
        payload: res.data.posts,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  //TODO: Move search here

  //Set Loading
  const setLoading = () => dispatch({ type: postsConstants.SET_LOADING });

  return (
    <postsContext.Provider
      value={{
        getFeed,
        getUserPosts,
        feed: state.feed,
        userPosts: state.userPosts,
      }}>
      {props.children}
    </postsContext.Provider>
  );
};

export default PostsState;
