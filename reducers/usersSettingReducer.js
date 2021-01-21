import { HYDRATE } from "next-redux-wrapper";
import { types } from "../types/types";

const initialState = {
  language: "pt-br",
  postsPerPage: 4,
};

const userSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    case types.USER_SETTINGS_UPDATE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default userSettingReducer;