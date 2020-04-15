import React from 'react';
import Form from './Form';
import Ending from '../MainScreen/Ending';
import { connect } from 'react-redux';
import studentActions from '../../actions/student-actions';
import simplifyingActions from '../../actions/simplifying-actions';

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listQuestion: this.props.listQuestion,
            screen: 0,
        }
        this.addQuestion = this.addQuestion.bind(this)
        this.nextScreen = this.nextScreen.bind(this)
    }

    addQuestion(object) {
        this.setState({
            listQuestion: this.state.listQuestion.concat([object])
        })
    }
    
    nextScreen() {
        this.setState({
            screen: this.state.screen + 1
        })
    }

    render() {
        return (
            (this.state.screen < this.state.listQuestion.length) ?
            <Form
                numerator={this.state.listQuestion[this.state.screen].numerator}
                denominator={this.state.listQuestion[this.state.screen].denominator}
                nextScreen={this.nextScreen}
                mainScreen={this.props.mainScreen}
                screen={this.state.screen}
                len={this.state.listQuestion.length}
            /> :
            <Ending 
                mainScreen={this.props.mainScreen}
            />
        );
    }
}

const mapStatetoProps = (store) => {
    return {
        listQuestion: store.Simplifying.get('listQuestion').toJS()
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => {
            dispatch(studentActions.Home)
            dispatch(simplifyingActions.Home)
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Exam);