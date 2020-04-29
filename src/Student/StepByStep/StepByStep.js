import React from 'react';
import Home from './Home';
import Form from './Form';
import {Transition, animated} from 'react-spring/renderprops';
import StudentActions from '../../actions/student-actions';
import { connect } from 'react-redux';
import Actions from '../../actions/step-by-step-action';
import Start from '../MainScreen/Start'

class StepByStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            doneStarting: 1
        }        
        this.changeScreen = this.changeScreen.bind(this);
    }

    changeScreen() {
        this.setState({
            doneStarting: !this.state.doneStarting
        });   
    }

    render() {
        return(
            <div>
                <Transition
                    items={this.state.doneStarting}
                    from={{ opacity: 0}}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    config={{duration: 0}}
                    >
                    {show =>
                        show
                        ? props => <Start nextScreen={() => this.changeScreen()} />
                        : props => <Form numerator = {60} denominator = {96} mainScreen = {() => {this.props.mainScreen()}}/>
                    }
                </Transition>
            </div>
        )
        // switch(this.props.screen) {
        //     case 0: 
        //         return <Home
        //         />
        //     case 1:
        //         return <Form 
        //             numerator = {60}
        //             denominator = {96}
        //             mainScreen = {() => {this.props.mainScreen()}}
        //         />
        //     default:
        //         return <h1>Render StepByStep Error</h1>
        // }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.StepByStep.get('screen')
    }
}


const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => dispatch(StudentActions.Home)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepByStep);