import React from 'react';
import Home from './Home';
import Exam from './Exam';

class SimplifyingFraction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeScreen: true 
        };
        this.switchScreen = this.switchScreen.bind(this);
    }

    switchScreen() {
        this.setState({
            homeScreen: !this.state.homeScreen
        })
    }

    render() {
        switch(this.state.homeScreen) {
            case true :
                return (
                    <Home 
                        examScreen={this.switchScreen}
                        mainScreen={this.props.mainScreen}
                    />
                );
            default: 
                return (
                    <Exam 
                        mainScreen={this.props.mainScreen}
                    />
                );
        }
    }
}

export default SimplifyingFraction;