import React, { useReducer } from "react";
import axios from "axios";
import pageContext from "./pageContext";
import Routes from "../../../routes.js";

import { pageConstants } from "../constants";
import pageReducer from "./pageReducer";

const PageState = props => {
  const initialState = {
    isShowingNotification: false,
    message: "",
    type: "",
    showingSidePages: [],
  };

  const [state, dispatch] = useReducer(pageReducer, initialState);

  //ACTIONS
  //Shows the notification
  const showNotification = (message, type) => {
    dispatch({
      type: pageConstants.SHOW_NOTIFICATION,
      payload: { message, type },
    });
  };

  //Hides the notification
  const removeNotification = () => {
    dispatch({
      type: pageConstants.REMOVE_NOTIFICATION,
    });
  };

  //Adds a side page
  const addSidePage = (sidePage, props) => {
    dispatch({
      type: pageConstants.ADD_SIDE_PAGE,
      payload: { sidePage, props },
    });
  };
  //Removes a side page
  const removeSidePage = () => {
    dispatch({
      type: pageConstants.REMOVE_SIDE_PAGE,
    });
  };
  return (
    <pageContext.Provider
      value={{
        showNotification: showNotification,
        removeNotification: removeNotification,
        addSidePage: addSidePage,
        removeSidePage: removeSidePage,
        isShowingNotification: state.isShowingNotification,
        message: state.message,
        showingSidePages: state.showingSidePages,
        type: state.type,
      }}>
      {props.children}
    </pageContext.Provider>
  );
};

export default PageState;
