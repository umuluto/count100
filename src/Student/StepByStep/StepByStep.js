import React from 'react';
import Home from './Home';
import Form from './Form';
import {Transition, animated} from 'react-spring/renderprops';
import StudentActions from '../../actions/student-actions';
import { connect } from 'react-redux';
import Actions from '../../actions/step-by-step-action';
import Start from '../MainScreen/Start';
import Exam from '../../actions/step-by-step-action'
import Ending from '../MainScreen/Ending';

class StepByStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: this.props.screen
        }
        this.updateScreen = this.updateScreen.bind(this);

        console.log(props);
    }

    updateScreen() {
        this.setState({
            screen: this.state.screen + 1
        })
    }

    componentWillReceiveProps(){
        this.setState({
            screen: this.props.screen
        })
    }

    render() {
        switch(this.state.screen) {
            case 0:
                return <Start nextScreen={() => this.updateScreen()} />;
            case this.props.listQuestion.length + 1:
                return <Ending />
            default:
                return <Transition
                    from={{ opacity: 0}}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    config={{duration: 0}}
                    items = {this.state.screen}
                >{
                    show => show ? props => <Form 
                    numerator = {this.props.listQuestion[this.state.screen - 1].numerator}
                    denominator = {this.props.listQuestion[this.state.screen - 1].denominator}
                    mainScreen = {() => {this.props.mainScreen()}}
                    screen = {this.state.screen - 1}
                    length = {this.props.listQuestion.length}
                    updateScreen = {() => this.updateScreen()}
                />
                : props => <div></div>
                }
                    
                </Transition>
        }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.StepByStep.get('screen'),
        listQuestion: Array.from(store.StepByStep.get('listQuestion'))
    }
}


const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => dispatch(StudentActions.Home),
        changeScreen: () => dispatch(Exam.Exam)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepByStep);