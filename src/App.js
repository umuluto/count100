import React from 'react';
import Home from './Home';
import StepByStep from './StepByStep/StepByStep'
import SimplifyingFraction from './SimplifyingFraction/SimplifyingFraction'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        };
        this.switchScreen = this.switchScreen.bind(this);
    }

    switchScreen(idScreen) {
        this.setState({
            screen: idScreen
        });
    }

    render() {
        return (
            <div>
                <Home 
                    curScreen={this.state.screen}
                    simplifyingFractionScreen={() => this.switchScreen(1)}
                    StepByStep={() => this.switchScreen(3)}
                />
                <SimplifyingFraction 
                    curScreen={this.state.screen}
                    homeScreen={() => this.switchScreen(0)}
                />
                <StepByStep
                    curScreen = {this.state.screen}
                    homeScreen={() => this.switchScreen(0)}
                />
            </div>
        );
    }
}

export default App;