import React from "react";

export default class ToDo extends React.Component {
  render() {
    const { tittle, description, completed } = this.props;
    return (
      <div style={{ border: "1px solid black" }}>
        <p>
          <h6>{tittle}</h6>
          <p>
            {description}
            <br />
            {completed ? (
              <div>
                <strike>Tarea completada</strike>
              </div>
            ) : (
              <div>
                <strike>Tarea faltante</strike>
              </div>
            )}
          </p>
        </p>
      </div>
    );
  }
}
