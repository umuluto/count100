import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import NavButton from "./NavButton"


class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleObject = {
      borderBottom: "1px solid rgba(150,150,150,0.29)",
      lineHeight: "49px",
      position: "relative",
      padding: "0 20px",
      display: "flex",
    };

    return (
      <div style={styleObject}>
        <NavButton text={"Trở lại"} />
        <ProgressBar
          numberOfBeads={this.props.numberOfBeads}
          pushMoveBead={this.props.pushMoveBead}
        />
        {/* <NavButton text={"Next"} /> */}
      </div>
    );
  }
}

export default NavigationBar;
