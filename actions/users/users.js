import { types } from "../../types/types";



export const userUpdate = (user) => ({
  type: types.USER_UPDATE,
  payload: user,
});

export const userReset = () => {
  return {
    type: types.USER_RESET,
  };
};