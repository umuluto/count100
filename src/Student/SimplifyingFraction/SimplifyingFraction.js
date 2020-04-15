import React from 'react';
import Home from './Home';
import Exam from './Exam';
import { connect } from 'react-redux';

class SimplifyingFraction extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return <Home />
            case 1: 
                return <Exam />
            default: 
                return <h1>Render Simplifying Fraction Error</h1>
        }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.Simplifying.get('screen')
    }
}

export default connect(mapStatetoProps)(SimplifyingFraction);