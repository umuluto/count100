import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/app-actions';

class Lecturer extends React.Component {
    render() {
        return (
            <div>
                <h1>Lecturer</h1>
                <button onClick={this.props.Home}>Main menu</button>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        Home: () => dispatch(actions.Home)
    }
}

export default connect(null, mapDispatchtoProps)(Lecturer);