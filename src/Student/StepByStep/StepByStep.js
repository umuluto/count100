import React from 'react';
import Home from './Home';

class StepByStep extends React.Component {
    render() {
        return (
            <Home 
<<<<<<< HEAD:src/StepByStep/StepByStep.js
                homeScreen = {() => {this.props.homeScreen()}}
=======
                homeScreen = {() => this.props.mainScreen()}
>>>>>>> origin/master:src/Student/StepByStep/StepByStep.js
            />
        );
    }
}

export default StepByStep;