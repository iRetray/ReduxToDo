import { createStore, combineReducers } from "redux";
import toDo from "./reducers";

const allReducers = combineReducers({
  toDo,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
