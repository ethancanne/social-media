import React, { useReducer, useContext } from "react";
import axios from "axios";
import postsReducer from "./postsReducer";
import postsContext from "./postsContext";

import { postsConstants } from "../constants";

const PostsState = props => {
  const initialState = { userPosts: [], feed: [], isLoading: false };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  //ACTIONS
  //Set Loading
  const setLoading = () => dispatch({ type: postsConstants.SET_LOADING });

  const getFeed = async () => {
    try {
      setLoading();
      const res = await axios.get("/api/getFollowingPosts");
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
      const res = await axios.get("/api/getUserPosts" + "/" + id);
      dispatch({
        type: postsConstants.GET_USER_POSTS,
        payload: res.data.posts,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const createPost = async (title, content, image) => {
    try {
      setLoading();
      //Set up form data
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

      const res = await axios.post("/api/createPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.error) throw res.data.error;

      dispatch({
        type: postsConstants.CREATE_POST,
        payload: res.data.post,
      });
      return res.data.message;
    } catch (err) {
      console.log(err.message);
      throw err.message || err;
    }
  };

  //TODO: Move search here

  return (
    <postsContext.Provider
      value={{
        getFeed,
        getUserPosts,
        createPost,
        isLoading: state.isLoading,
        feed: state.feed,
        userPosts: state.userPosts,
      }}>
      {props.children}
    </postsContext.Provider>
  );
};

export default PostsState;
