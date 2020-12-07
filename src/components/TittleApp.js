import React from "react";
import { connect } from "react-redux";

class TittleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  render() {
    return (
      <div>
        <p>
          ¡Bienvenido! <strong>{this.state.username}</strong>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

export default connect(mapStateToProps, null)(TittleApp);
