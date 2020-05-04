import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import GreenBead from "./GreenBead";

function NavButton(props) {
  const backButtonStyle = {
    fontSize: "18px",
    // color: '#246EA1',
    // background: 'transparent',
    lineHeight: "49px",
    position: "relative",
  };

  const fakeURL = "https://google.com";

  return (
    <a className={"glow:hover pointer b"} style={backButtonStyle}>
      <span>{props.text}</span>
    </a>
  );
}

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
