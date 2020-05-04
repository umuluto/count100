import React from "react";

class Fraction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleObject = {
      width: "102px",
      height: "137px",
      background: `url(https://content.dragonlearn.in/126392/3390/19.svg) 5px 5px no-repeat`,
      backgroundSize: "92px 127px",
    };

    return (
      <div
        className="center b"
        onClick={() => {
          if (typeof this.props.upperCall !== "undefined")
            this.props.upperCall(this.props.numerator, this.props.denominator);
        }}
      >
        <div
          className={
            "tc items-center mh2 center flex " +
            (this.props.clickable ? "grow pointer" : "")
          }
          style={styleObject}
        >
          <div className="center items-center">
            <div className="ma1">{this.props.numerator}</div>
            <div className="ba"></div>
            <div className="ma1">{this.props.denominator}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fraction;
