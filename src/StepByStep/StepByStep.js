import React from 'react';
import Home from './Home';

class StepByStep extends React.Component {
    render() {
        if (this.props.curScreen !== 3) return <div></div>;
        return (
            <Home 
                homeScreen = {() => this.props.homeScreen}
            />
        );
    }
}

export default StepByStep;