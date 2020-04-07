import React from 'react';
import Home from './Home';

class SimplifyingFraction extends React.Component {
    render() {
        if (this.props.curScreen !== 1) return <div></div>;
        return (
            <Home />
        );
    }
}

export default SimplifyingFraction;