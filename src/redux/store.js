import { createStore, combineReducers } from "redux";
import { todo } from "./reducers";

const allReducers = combineReducers({
  todo,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
