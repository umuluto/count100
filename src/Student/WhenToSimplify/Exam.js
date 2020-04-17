import React from 'react';
import Exercise from './Exercise';
import { connect } from 'react-redux';
import Ending from '../MainScreen/Ending';

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listQuestion: this.props.listQuestion,
            curQuestion: 0,
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    nextQuestion = () => {
        this.setState({
            curQuestion: this.state.curQuestion + 1
        })
    }

    render() {
        console.log(this.state.listQuestion)
        return (
            (this.state.curQuestion < this.state.listQuestion.length) ?
            (
                <Exercise 
                    Question={this.state.listQuestion[this.state.curQuestion]}
                    id={this.state.curQuestion}
                    nextQuestion = {this.nextQuestion}
                    screen = {this.state.curQuestion}
                    len = {this.state.listQuestion.length}
                />
            ) 
            : (
                <Ending />
            )
        );
    }
}

const mapStatetoProps = (store) => {
    return {
        listQuestion: store.WhenToSimplify.get('listQuestion').toJS()
    }
}

export default connect(mapStatetoProps)(Exam);