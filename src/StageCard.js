import React from "react";

class StageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="db center tc black link grow ba bw2 b--blue items-center pointer tc"
        title={this.props.title}
      >
        <img className="center pa5" alt="" src={this.props.imgLink} />

        <dl className="lh-copy">
          <dd className="ml0">{this.props.stageTitle}</dd>
        </dl>
      </div>
    );
  }
}

export default StageCard;
