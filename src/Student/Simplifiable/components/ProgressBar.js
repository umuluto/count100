import React, { Component } from "react";
import GreenBead from "./GreenBead";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleObject = {
      margin: "auto",
      width: "465px",
      height: "26px",
      borderRadius: "16px",
      background: "#EDEDED",
      boxShadow:
        "inset 0px 1px 1px 0px rgba(0,0,0,0.22), inset 0px 1px 3px 0px rgba(0,0,0,0.18)",
      position: "relative",
    };

    const beadList = [];
    for (let i = 0; i < this.props.numberOfBeads; i++) {
      beadList.push(
        <GreenBead
          position={i}
          numberOfBeads={this.props.numberOfBeads}
          pushMoveBead={this.props.pushMoveBead}
        />
      );
    }
    return <div style={styleObject}>{beadList}</div>;
  }
}

export default ProgressBar;
