import { combineReducers } from "redux";
import testReducer from "./testReducer";
import reportReducer from "./reportReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  tests: testReducer,
  reports: reportReducer,
  errors: errorReducer,
});
