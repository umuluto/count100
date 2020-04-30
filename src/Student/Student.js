import React from 'react';
import SimplifyingFraction from './SimplifyingFraction/SimplifyingFraction';  
import Home from './MainScreen/Home';
import StepByStep from './StepByStep/StepByStep.js';
import { connect } from 'react-redux';
import Ending from './MainScreen/Ending'
import WhenToSimplify from './WhenToSimplify/WhenToSimplify'
import SimplifyEverything from './SimplifyEverything/SimplifyEverything';

class Student extends React.Component {
    renderedScreen() {
        switch(this.props.screen) {
            case 0:
                return <Home />
            case 1:
                return <SimplifyingFraction />
            case 3: 
                return <StepByStep />
            case 4:
                return <SimplifyEverything />
            case 5:
                return <WhenToSimplify />
            case 6:
                return <Ending />
            default:
                return <h1>Error Student Rendering</h1>
        }
    }

    render() {
        return this.renderedScreen();
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.Student.get('screen')
    }
}

export default connect(mapStatetoProps)(Student);