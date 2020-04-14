import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>    
                <button onClick={this.props.simplifyingFractionScreen}>SimplifyingFraction</button>
                <button onClick={this.props.stepByStepScreen}>StepByStep</button>
            </div>
        );
    }
}

export default Home;