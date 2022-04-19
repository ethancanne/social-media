import { pageConstants } from "../constants";

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case pageConstants.SHOW_NOTIFICATION:
      return {
        ...state,
        isShowingNotification: true,
        message: action.payload.message,
        type: action.payload.type,
      };

    case pageConstants.REMOVE_NOTIFICATION:
      return {
        ...state,
        isShowingNotification: false,
      };

    case pageConstants.ADD_SIDE_PAGE:
      return {
        ...state,
        showingSidePages: [
          ...state.showingSidePages,
          { sidePage: action.payload.sidePage, props: action.payload.props },
        ],
      };
    case pageConstants.REMOVE_SIDE_PAGE:
      state.showingSidePages.pop();
      return {
        ...state,
        showingSidePages: state.showingSidePages,
      };

    default:
      return state;
  }
};
