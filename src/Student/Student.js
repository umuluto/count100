import React from 'react';
import SimplifyingFraction from './SimplifyingFraction/SimplifyingFraction';  
import Home from './MainScreen/Home';
import StepByStep from './StepByStep/StepByStep.js';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        }
        this.switchScreen = this.switchScreen.bind(this)
    }

    switchScreen(idScreen) {
        this.setState ({
            screen: idScreen
        })
    }

    renderedScreen() {
        switch(this.state.screen) {
            case 1:
                return <SimplifyingFraction mainScreen={() => this.switchScreen(0)} />
            case 3:
                return <StepByStep mainScreen={() => this.switchScreen(0)} />
            case 0:
                return (
                    <Home 
                        simplifyingFractionScreen = {() => this.switchScreen(1)}
                        stepByStepScreen={() => this.switchScreen(3)}
                    />
                );
        }

    }

    render() {
        return this.renderedScreen();
    }
}

export default Student;