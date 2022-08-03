import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import astroReducer from "./astroReducer";
import authReducer from "./authReducer";

export default combineReducers({
  api: apiReducer,
  data: astroReducer,
  auth: authReducer,
});
