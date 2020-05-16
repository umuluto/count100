import React from 'react';
import './Home.css';
import StageSelection from './StageSelection';
import { Spring } from 'react-spring/renderprops';

class Home extends React.Component {
    render() {
        return (
            <Spring
                from={{ transform: 'translate3d(200px, 200px, 0)' }}
                to={{ transform: 'translate3d(0px, 0px, 0)' }}
            >
                {
                    props => (
                        <StageSelection style={props}/>
                    )
                }
            </Spring>

        );
    }
}

export default Home;