import React from 'react';
import Exam from './Exam';
import { connect } from 'react-redux';
import Start from '../MainScreen/Start';
import Simplifying from '../../actions/simplifying-actions';

class SimplifyingFraction extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return <Start
                    nextScreen = {this.props.Exam}
                />
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

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        Exam: () => dispatch(Simplifying.Exam)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SimplifyingFraction);