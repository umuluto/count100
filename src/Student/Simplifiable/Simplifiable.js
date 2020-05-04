import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import Task from "./components/Task";
import Fraction from "./components/Fraction";
import NumberInput from "./components/NumberInput";
import PlayScreen from "./components/PlayScreen";

function randomExamNumber() {
  return Math.round(Math.random() * 9 + 1);
}

class Simplifiable extends Component {
  constructor(props) {
    super(props);
    this.pushMoveBead = this.pushMoveBead.bind(this);
    this.getMoveBead = this.getMoveBead.bind(this);
    this.finishExercise = this.finishExercise.bind(this);
    this.state = {
      moveBead: [],
      exercisesLeft: this.props.numberOfExercises,
    };
  }

  finishExercise(value, resetState) {
    const afterMoveCallback = () => {
      this.setState({
        exercisesLeft: this.state.exercisesLeft - value,
      });
      resetState();
    };

    if (value === 1) {
      this.getMoveBead()[this.state.exercisesLeft - 1].move(afterMoveCallback);
    } else {
      if (typeof this.getMoveBead()[this.state.exercisesLeft] !== "undefined") {
        this.getMoveBead()[this.state.exercisesLeft].moveBackward(
          afterMoveCallback
        );
      } else {
        value = 0;
      }
    }
  }

  pushMoveBead(newMoveBead) {
    const moveBeadList = this.state.moveBead;
    moveBeadList.push(newMoveBead);
    this.setState({
      moveBead: moveBeadList,
    });
  }

  getMoveBead() {
    console.log(this.state.moveBead);
    return this.state.moveBead;
  }

  componentDidMount() {
    this.getMoveBead();
  }

  render() {
    const randomExam = [];
    const randomMultiplier = Math.round(Math.random() * 9 + 1);
    const randomFraction = Math.round([0, 2, 4][Math.random() * 2]);
    for (let i = 0; i < 6; i++) randomExam.push(randomExamNumber());
    randomExam[randomFraction] *= randomMultiplier;
    randomExam[randomFraction + 1] *= randomMultiplier;

    return (
      <div className="center">
        <NavigationBar
          numberOfBeads={this.props.numberOfExercises}
          pushMoveBead={this.pushMoveBead}
        />
        <Task text={"Chọn một trong các phân số sau và tối giản nó"} />
        <PlayScreen
          exam={randomExam}
          getMoveBead={this.getMoveBead}
          finishExercise={this.finishExercise}
          exercisesLeft={this.state.exercisesLeft}
        />
      </div>
    );
  }
}

export default Simplifiable;
