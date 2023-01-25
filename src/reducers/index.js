import pollingReducer from "./pollingReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  pollingReducer,
});
export default rootReducer;
