import React from 'react';
import SimplifyingFraction from './SimplifyingFraction/SimplifyingFraction';
import Home from './MainScreen/Home';
import StepByStep from './StepByStep/StepByStep.js';
import { connect } from 'react-redux';
import Ending from './MainScreen/Ending'
import WhenToSimplify from './WhenToSimplify/WhenToSimplify'
import Simplifiable from './Simplifiable/Simplifiable';
import SimplifyEverything from './SimplifyEverything/SimplifyEverything';
import { Spring } from 'react-spring/renderprops';

class Student extends React.Component {
    renderedScreen = (id) => {
        switch (id) {
            case 0:
                return <Home />
            case 1:
                return <SimplifyingFraction />
            case 2:
                return <Simplifiable numberOfExercises={5} />
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
        return (
            <Spring
                from={{ transform: 'translate3d(200px, 200px, 0)' }}
                to={{ transform: 'translate3d(0px, 0px, 0)' }}
            >
                {
                    props => (
                        <div style={props}>
                            {this.renderedScreen(this.props.screen)}
                        </div>
                    )
                }
            </Spring>
        );
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.Student.get('screen')
    }
}

export default connect(mapStatetoProps)(Student);