import React, { Component } from "react";
import { connect } from "react-redux";
import Ending from "../MainScreen/Ending";
import NavigationBar from "./components/NavigationBar";
import Task from "./components/Task";
import PlayScreen from "./components/PlayScreen";
import StudentActions from "../../actions/student-actions";
import Start from '../MainScreen/Start'

function randomExamNumber() {
  return Math.round(Math.random() * 9 + 1);
}

function generateExam() {
  const randomExam = [];
  const randomMultiplier = Math.round(Math.random() * 2 + 2);
  const randomFraction = Math.round(Math.random() * 2) * 2;
  for (let i = 0; i < 6; i++) randomExam.push(randomExamNumber());
  randomExam[randomFraction] *= randomMultiplier;
  randomExam[randomFraction + 1] *= randomMultiplier;
  return randomExam;
}

class Stage2 extends Component {
  constructor(props) {
    super(props);
    this.pushMoveBead = this.pushMoveBead.bind(this);
    this.getMoveBead = this.getMoveBead.bind(this);
    this.finishExercise = this.finishExercise.bind(this);
    this.state = {
      moveBead: [],
      exercisesLeft: this.props.numberOfExercises,
      randomExam: generateExam(),
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
      this.setState({ randomExam: generateExam() });
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
    // console.log(this.state.moveBead);
    return this.state.moveBead;
  }

  render() {
    if (this.state.exercisesLeft <= 0) {
      this.props.finish();
      return <div></div>;
    }

    return (
      <div className="center">
        <NavigationBar
          numberOfBeads={this.props.numberOfExercises}
          pushMoveBead={this.pushMoveBead}
        />
        <Task text={"Chọn một trong các phân số sau và tối giản nó"} />
        <PlayScreen
          exam={this.state.randomExam}
          getMoveBead={this.getMoveBead}
          finishExercise={this.finishExercise}
          exercisesLeft={this.state.exercisesLeft}
        />
      </div>
    );
  }
}

class Simplifiable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { finished: false, started: false };
    this.finish = this.finish.bind(this);
    this.start = this.start.bind(this);
  }

  finish() {
    this.setState({
      finish: true,
    });
  }

  start() {
    this.setState({
      started: true,
    });
  }

  render() {
    if (this.state.finish) {
      return <Ending />;
    }
    return (
      this.state.started ? (
        <div>
          <div className="uchiru_bg_cell" />
          <div className="uchiru_bg_color" />
          <div className="uchiru_bg_stuff" />
          <div className="uchiru_box">
            <Stage2
              numberOfExercises={this.props.numberOfExercises}
              finish={this.finish}
            />
          </div>
        </div>
      ) : <Start nextScreen={this.start}/>
    );
  }
}

const mapStatetoProps = (store) => {
  return {
    numberOfExercises: store.Simplifiable.get('noQuestions')
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    mainScreen: () => {
      dispatch(StudentActions.Home);
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Simplifiable);
