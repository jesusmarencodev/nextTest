import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import userReducer from "./usersReducers";
import userSettingReducer from "./usersSettingReducer";


export default combineReducers({
  settings: userSettingReducer,
  user: userReducer,
  posts: postsReducer,
});