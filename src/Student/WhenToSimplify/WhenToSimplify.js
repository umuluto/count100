import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Exam from './Exam';

class WhenToSimplify extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return <Home />
            case 1:
                return <Exam />
            default:
                return <h1>Error When To Simplify Screen</h1>
        }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.WhenToSimplify.get('screen')
    }
}

export default connect(mapStatetoProps)(WhenToSimplify);