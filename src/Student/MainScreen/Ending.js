import React from 'react';
import actions from '../../actions/student-actions.js';
import { connect } from 'react-redux';

class Ending extends React.Component {
    render() {
        return (
            <button onClick={this.props.homeScreen}>Ending</button>
        ) ;
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        homeScreen: () => dispatch(actions.Home)
    }
}

export default connect(null, mapDispatchtoProps)(Ending);