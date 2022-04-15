import React, { useReducer } from "react";
import axios from "axios";
import notificationContext from "./notificationContext";
import Routes from "../../../routes.js";

import { notificationConstants } from "../constants";
import notificationReducer from "./notificationReducer";

const NotificationState = props => {
  const initialState = {
    isShowingNotification: false,
    message: "",
    type: "",
  };

  const [state, dispatch] = useReducer(notificationReducer, initialState);

  //ACTIONS
  //Shows the notification
  const showNotification = (message, type) => {
    dispatch({
      type: notificationConstants.SHOW_NOTIFICATION,
      payload: { message, type },
    });
  };

  const removeNotification = () => {
    dispatch({
      type: notificationConstants.REMOVE_NOTIFICATION,
    });
  };
  return (
    <notificationContext.Provider
      value={{
        showNotification: showNotification,
        removeNotification: removeNotification,
        isShowingNotification: state.isShowingNotification,
        message: state.message,
        type: state.type,
      }}>
      {props.children}
    </notificationContext.Provider>
  );
};

export default NotificationState;
