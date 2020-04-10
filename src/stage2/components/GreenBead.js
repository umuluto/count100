import React, { Component } from 'react';

function calculatePosition(position) {
  return position * 22 + 4 * (position + 1);
}

class GreenBead extends Component {
  constructor(props) {
    super(props);
    const { position, numberOfBeads } = props;
    this.state = {
      currentPosition: calculatePosition(position),
      finishPosition: 465 - calculatePosition(numberOfBeads - position)
    }
    this.move = this.move.bind(this);
  }

  move() {
    if (this.state.currentPosition >= this.state.finishPosition) return;
    const move = setInterval(() => {
      if (this.state.currentPosition >= this.state.finishPosition) clearInterval(move);
      this.setState({
        currentPosition: this.state.currentPosition + 4,
      })
    }, 10);
  }


  render() {
    const beadURL = "https://content.dragonlearn.in/fp/97/fat_player/components/progress" +
      "/beads/v1/img/bead-874cc643b18fbe33aacee82d8f4353eec013afca7486232ce8e36adbbae9eeb6.png";
    const { position } = this.state;
    const styleObject = {
      top: "3px",
      left: `${this.state.currentPosition}px`,
      backgroundImage: `url(${beadURL})`,
      width: '21px',
      height: '21px',
      borderRadius: '10px',
      position: 'absolute'
    }

    return (
      <i style={styleObject} onClick={this.move}></i>
    )
  }
}

export default GreenBead;