import React from "react";

class StageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="tc b--blue ba dib br3 pa3 ma2 grow bw2 shadow-5 pointer center link"
        title={this.props.title}
      >
        <img className="center pa4" alt="" src={this.props.imgLink} />

        <dl className="lh-copy">
          <dd className="ml0">{this.props.stageTitle}</dd>
        </dl>
      </div>
    );
  }
}

export default StageCard;
