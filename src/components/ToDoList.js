import React from "react";
import ToDo from "./ToDo"

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        {ToDoList.map((todo) => {
          return <ToDo />;
        })}
      </div>
    );
  }
}
