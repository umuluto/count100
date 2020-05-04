import React from "react";
import { connect } from "react-redux";
import StudentActions from "../../../actions/student-actions";
const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    mainScreen: () => {
      dispatch(StudentActions.Home);
    },
  };
};

function NavButton(props) {
  const backButtonStyle = {
    fontSize: "18px",
    // color: '#246EA1',
    // background: 'transparent',
    lineHeight: "49px",
    position: "relative",
  };

  return (
    <a
      className={"glow:hover pointer b"}
      style={backButtonStyle}
      onClick={props.mainScreen}
    >
      <span>{props.text}</span>
    </a>
  );
}
export default connect(null, mapDispatchtoProps)(NavButton);
