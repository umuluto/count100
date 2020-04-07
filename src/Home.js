import React from 'react';

class Home extends React.Component {
    render() {
        if (this.props.curScreen !== 0) return <div></div>;
        return (
            <button onClick={this.props.simplifyingFractionScreen}>SimplifyingFraction</button>
        );
    }
}

export default Home;