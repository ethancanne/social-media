import { notificationConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case notificationConstants.SHOW_NOTIFICATION:
      return {
        ...state,
        isShowingNotification: true,
        message: action.payload.message,
        type: action.payload.type,
      };

    case notificationConstants.REMOVE_NOTIFICATION:
      return {
        ...state,
        isShowingNotification: false,
      };

    default:
      return state;
  }
};
