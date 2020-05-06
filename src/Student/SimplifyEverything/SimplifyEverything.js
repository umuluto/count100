import React from 'react';
import { connect } from 'react-redux';
import Start from '../MainScreen/Start';
import Exam from './Exam';
import Ending from '../MainScreen/Ending';
import studentActions from '../../actions/student-actions';
import simplifyEverythingActions from '../../actions/simplify-everything-actions';

import Tube from './GameStuff/Tube';

class SimplifyEverything extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            screen: this.props.screen
        }
    }

    render() {
        switch(this.props.screen) {
            case 0:
                return <Start nextScreen = {this.props.examScreen}/>
            case 1: 
                return <Exam mainScreen = {this.props.mainScreen}/>
            default:
                return (
                    <h1>PaEg NOt fOuND 404</h1>
                )
        }
    }
}

const mapStateToProps = (store) => {
    return {
        screen: store.SimplifyEverything.get('screen')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => dispatch(studentActions.Home),
        examScreen: () => dispatch(simplifyEverythingActions.Exam)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimplifyEverything);