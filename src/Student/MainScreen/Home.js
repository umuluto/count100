import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <button onClick={this.props.simplifyingFractionScreen}>simplifyingFractionScreen</button>
        );
    }
}

export default Home;