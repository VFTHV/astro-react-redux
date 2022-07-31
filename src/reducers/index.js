import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import astroReducer from "./astroReducer";

export default combineReducers({
  api: apiReducer,
  data: astroReducer,
});
