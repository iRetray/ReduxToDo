import React from "react";
import { Provider } from "react-redux";

import ToDoList from "./components/Counter";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
