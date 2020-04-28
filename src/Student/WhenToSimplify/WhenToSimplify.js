import React from 'react';
import { connect } from 'react-redux';
import Exam from './Exam';
import Start from '../MainScreen/Start'
import whenToSimplifyActions from '../../actions/when-to-simplify-actions';

class WhenToSimplify extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return (
                    <Start 
                        nextScreen = {this.props.examScreen}
                    />
                )
            case 1:
                return (
                    <Exam />
                )
            default:
                return (
                    <h1>Error When To Simplify Screen</h1>
                )
        }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.WhenToSimplify.get('screen')
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        examScreen: () => dispatch(whenToSimplifyActions.Exam)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(WhenToSimplify);