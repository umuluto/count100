import React from 'react';
import Home from './Home';
import Form from './Form';
import {Transition, animated} from 'react-spring/renderprops';
import StudentActions from '../../actions/student-actions';
import { connect } from 'react-redux';
import Actions from '../../actions/step-by-step-action';
import Start from '../MainScreen/Start';
import Exam from '../../actions/step-by-step-action'

class StepByStep extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0: 
                return <Start nextScreen={() => this.props.changeScreen()} />
            case 1:
                return <Form 
                    numerator = {60}
                    denominator = {96}
                    mainScreen = {() => {this.props.mainScreen()}}
                />
            default:
                return <h1>Render StepByStep Error</h1>
        }

    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.StepByStep.get('screen')
    }
}


const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => dispatch(StudentActions.Home),
        changeScreen: () => dispatch(Exam.Exam)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepByStep);