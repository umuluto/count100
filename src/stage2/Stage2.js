import React, { Component } from "react";
import NavigationBar from './components/NavigationBar';
import Task from './components/Task';

class Stage2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavigationBar numberOfBeads={5} />
        <Task text={"YO"} />
        <div>
          PlayScreen
        </div>
        <div>
          Answer Button
        </div>
      </div>
    )
  }

}

export default Stage2;