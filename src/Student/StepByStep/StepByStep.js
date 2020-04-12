import React from 'react';
import Home from './Home';

class StepByStep extends React.Component {
    render() {
        return (
            <Home 
                homeScreen = {() => this.props.mainScreen()}
            />
        );
    }
}

export default StepByStep;