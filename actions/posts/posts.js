import { types } from "../../types/types";

export const postsUpdateList = (posts) => {
  return {
    type: types.POSTS_GET_LIST,
    payload: posts,
  };
};