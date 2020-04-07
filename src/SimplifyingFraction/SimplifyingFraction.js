import React from 'react';
import Home from './Home';

class SimplifyingFraction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        }
    }

    render() {
        if (this.props.curScreen !== 1) return <div></div>;
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default SimplifyingFraction;