import React from 'react';
import Home from './Home';
import Form from './Form';
import { connect } from 'react-redux';

class StepByStep extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        switch(this.props.screen) {
            case 0: 
                return <Home />
            case 1:
                return <Form 
                    numerator = {60}
                    denominator = {96}
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

export default connect(mapStatetoProps)(StepByStep);