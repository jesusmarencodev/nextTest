import { HYDRATE } from "next-redux-wrapper";
import { types } from "../types/types";


const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  fullName: null,
  avatar: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case types.USER_UPDATE:
      const newState = { ...state, ...action.payload };
      newState.fullName = `${newState.firstName} ${newState.lastName}`;
      return newState;
    case types.USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;