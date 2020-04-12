import React from 'react';
import Form from './Form';
import Ending from '../MainScreen/Ending';

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listQuestion: [{
                numerator: 6,
                denominator: 12
            }, {
                numerator: 9,
                denominator: 12
            }],
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

export default Exam;