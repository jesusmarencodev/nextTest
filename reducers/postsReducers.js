import { HYDRATE } from "next-redux-wrapper";
import { types } from "../types/types";

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts;
    case types.POSTS_UPDATE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;