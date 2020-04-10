import React from 'react';
import SimplifyingFraction from './SimplifyingFraction/SimplifyingFraction';  
import Home from './MainScreen/Home';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        }
        this.swichScreen = this.swichScreen.bind(this)
    }

    swichScreen(idScreen) {
        this.setState ({
            screen: idScreen
        })
    }

    renderedScreen() {
        switch(this.state.screen) {
            case 1:
                return <SimplifyingFraction mainScreen={() => this.swichScreen(0)} />
            case 0:
                return (
                    <Home 
                        simplifyingFractionScreen = {() => this.swichScreen(1)}
                    />
                );
        }

    }

    render() {
        return this.renderedScreen();
    }
}

export default Student;