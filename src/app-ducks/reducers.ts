import { combineReducers } from "redux";
import MainReducer from "@careebiz/pages/Main/ducks/reducers";
const rootReducers = combineReducers({
  ...MainReducer
});

export default rootReducers;
