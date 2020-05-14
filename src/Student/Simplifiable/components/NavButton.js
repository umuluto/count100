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

  const arrowStyle = {
    top: "-2px",
    verticalAlign: "middle",
    display: "inline-block",
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderRight: "15px solid #246EA1",
    position: "relative",
    borderRadius: "50%",
  };

  const beforeArrow = {
    content: "",
    position: "absolute",
    width: 0,
    height: 0,
    right: "-18px",
    top: "-15px",
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderRight: "15px solid white",
  };

  return (
    <div className="glow">
      {/* <a
        className="back-link pointer"
        onClick={props.mainScreen}
        style={backButtonStyle}
      >
        <div class="arrow-left">::before</div>
        <span> Trở lại màn hình chính</span>
      </a> */}

      <a class="pointer" style={backButtonStyle} onClick={props.mainScreen}>
        <div style={arrowStyle}>
          <div style={beforeArrow}></div>
        </div>
        <span className=" no-underline"> Trở lại màn hình chính</span>
      </a>
    </div>
  );
}
export default connect(null, mapDispatchtoProps)(NavButton);
