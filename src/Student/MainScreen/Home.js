import React from 'react';
import './Home.css';
import StageSelection from './StageSelection';

class Home extends React.Component {
    render() {
        return (
            <StageSelection 
                simplifyingFractionScreen = {this.props.simplifyingFractionScreen}
                stepByStepScreen = {this.props.stepByStepScreen}
            />
        );
    }
}

export default Home;