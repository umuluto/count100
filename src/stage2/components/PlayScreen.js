import React, { Component } from "react";
import Fraction from "./Fraction";
import NumberInput from "./NumberInput";

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function reducable(numerator, denominator) {
  const currentGCD = gcd(numerator, denominator);
  if (currentGCD > 1) return true;
  return false;
}

function AnswersButton(props) {
  if (typeof props.exam !== "undefined")
    return (
      <div className="mw5 mw7-ns center pa3 ph5-ns">
        <div className="flex tc">
          <Fraction
            numerator={props.exam[0]}
            denominator={props.exam[1]}
            upperCall={props.selectLeftSide}
            clickable={true}
          />
          <Fraction
            numerator={props.exam[2]}
            denominator={props.exam[3]}
            upperCall={props.selectLeftSide}
            clickable={true}
          />
          <Fraction
            numerator={props.exam[4]}
            denominator={props.exam[5]}
            upperCall={props.selectLeftSide}
            clickable={true}
          />
        </div>
      </div>
    );
  return <div></div>;
}

class PlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftsideNumerator: "Tử số",
      leftsideDenominator: "Mẫu số",
    };
    this.resetState = this.resetState.bind(this);
    // this.selectLeftSide = this.selectLeftSide.bind(this);
  }

  selectLeftSide = (numerator, denominator) => {
    this.setState({
      leftsideNumerator: numerator,
      leftsideDenominator: denominator,
    });
  };

  resetState() {
    this.setState({
      leftsideNumerator: "Tử số",
      leftsideDenominator: "Mẫu số",
    });
    document.getElementById("numerator-input").value = "";
    document.getElementById("denominator-input").value = "";
  }

  inputValidation = () => {
    const inputNumerator = parseInt(
      document.getElementById("numerator-input").value
    );

    const inputDenominator = parseInt(
      document.getElementById("denominator-input").value
    );

    if (
      this.state.leftsideDenominator * inputNumerator !==
      this.state.leftsideNumerator * inputDenominator
    ) {
      alert("Kết quả sai !!!");
      return false;
    } else {
      if (
        reducable(
          this.state.leftsideNumerator,
          this.state.leftsideDenominator
        ) &&
        this.state.leftsideNumerator <= inputNumerator &&
        this.state.leftsideDenominator <= inputDenominator
      ) {
        alert("Phân số vẫn có thể được tối giản !!!");
      } else {
        alert("Kết quả đúng !!!");
        return true;
      }
    }
  };

  render() {
    return (
      <div className="ba bw2 b--blue mh5">
        <AnswersButton
          selectLeftSide={this.selectLeftSide}
          exam={this.props.exam}
        />
        <div className="ma5"></div>
        <div className="items-center tc center">
          <div className="flex mw5 mw7-ns center pa3 ph5-ns">
            <div className="flex tc center items-center">
              <Fraction
                numerator={this.state.leftsideNumerator}
                denominator={this.state.leftsideDenominator}
                id="leftside"
              />
              <h1 className="mh3">=</h1>
              <Fraction
                numerator={<NumberInput field="numerator" />}
                denominator={<NumberInput field="denominator" />}
              />
            </div>
          </div>
          <div
            className="tc b--blue dib ba br3 pa3 ma2 grow bw2 shadow-5 pointer center"
            onClick={() => {
              const result = this.inputValidation();
              // this.resetState();
              if (result === true) {
                // this.props.getMoveBead()[this.props.exercisesLeft - 1]();

                this.props.finishExercise(1, this.resetState);
              } else if (result === false) {
                this.props.finishExercise(-1, this.resetState);
              }
            }}
          >
            Kiểm tra
          </div>
        </div>
      </div>
    );
  }
}

export default PlayScreen;
