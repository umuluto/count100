import React from 'react';
import { connect } from 'react-redux';
import Simplifying from './Simplifying';
import WhenToSimplify from './WhenToSimplify';
import StepByStep from './StepByStep';
import SimplifyEverything from './SimplifyEverything';

class Home extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return <Simplifying />
            case 1:
                return <h1>Simplifiable or not Simplifiable</h1>
            case 2:
                return <StepByStep />
            case 3:
                return <SimplifyEverything> </SimplifyEverything>
            case 4:
                return <WhenToSimplify />
            default:
                return <h1>Error Rendering Lecturer</h1>
        }
    }
} 

const mapStatetoProps = (store) => {
    return {
        screen: store.Lecturer.get('screen')
    }
}

export default connect(mapStatetoProps)(Home);