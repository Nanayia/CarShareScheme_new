import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  user: userReducer,
  security: securityReducer
});

export default rootReducer