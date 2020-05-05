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
    <div>
      <a
        className="back-link pointer"
        onClick={props.mainScreen}
        style={backButtonStyle}
      >
        <span> Trở lại màn hình chính</span>
      </a>
    </div>
  );
}
export default connect(null, mapDispatchtoProps)(NavButton);
