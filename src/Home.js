import React from 'react';

class Home extends React.Component {
    render() {
        if (this.props.curScreen !== 0) return <div></div>;
        return (
            <div>    
                <button onClick={this.props.simplifyingFractionScreen}>SimplifyingFraction</button>
                <button onClick={this.props.StepByStep}>StepByStep</button>
            </div>
        );
    }
}

export default Home;