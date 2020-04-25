import React, { component } from 'react';

class Ruler extends React.Component{
    render(){
        return(
            <div className="number_axis">
                <div className="axis">
                    <div className="ball_wrapper"></div>
                    <div className="pointer"></div>
                </div>               
            </div>
        );
    }
}

export default Ruler;