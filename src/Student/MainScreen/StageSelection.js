import React from "react";
import StageCard from "./StageCard";
import { connect } from 'react-redux';
import actions from '../../actions/student-actions'
import AppActions from '../../actions/app-actions';
import {Link} from 'react-router-dom'

class StageSelection extends React.Component {
  render() {
    const stageImgs = [
      "3389-09a7f07b4baec5efbd2609245b94fc8f.png",
      "3390-e5c045b2a558cbda32ecebeeea99a982.png",
      "3391-40aaab2b73a867ce2b37564226a68fd8.png",
      "3392-aa0bb8aa0ba45aecef3a90164cf8f463.png",
      "india/hn-49bb6b1269464ab8ee1af3a95aaa3f58.png",
    ];

    const stageTitles = [
      "Tối giản phân số",
      "Tối giản được hoặc không",
      "Tối giản từng bước",
      "Tối giản mọi thứ",
      "Khi nào thì tối giản",
    ];

    const onClick = [
      this.props.SimplifyingFraction,
      this.props.Simplifiable,
      this.props.StepByStep,
      this.props.SimplifyEverything,
      this.props.WhenToSimplify
    ]

    const imageStoreURL = "https://dragonlearn.in/assets/card_previews/";

    const stageCards = [];
    for (let i = 0; i < stageImgs.length; i++) {
      stageCards.push(
        <StageCard
          key={i}
          title={stageTitles[i]}
          imgLink={imageStoreURL + stageImgs[i]}
          stageTitle={stageTitles[i]}
          onClick={onClick[i]}
        />
      );
    }
    return (
      <div className="center tc items-center">
        <h1 className="pa3 b tc"> Các bài tập tối giản phân số </h1>
        <div className="flex center items-center pa3">{stageCards}</div>
        <Link to="/Fraction">
          <button onClick={this.props.HomeScreen}>
            <div className="tc b--blue ba dib br3 pa3 ma2 grow bw2 shadow-5 pointer center link">
              Quay về màn hình chính
            </div>
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    SimplifyingFraction: () => dispatch(actions.SimplifyingFraction),
    HomeScreen: () => dispatch(AppActions.Home),
    WhenToSimplify: () => dispatch(actions.WhenToSimplify),
    StepByStep: () => dispatch(actions.StepByStep),
    Simplifiable: () => dispatch(actions.Simplifiable),
    SimplifyEverything: () => dispatch(actions.SimplifyEverything)
  }
}

export default connect(null, mapDispatchtoProps)(StageSelection);
