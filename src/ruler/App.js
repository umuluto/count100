import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Box from '../Box';
import ballstate from './ballstate';
import Ruler from './Ruler'

function App({ success,fail }) {
    const [ballNumber, setBallNumber] = useState(Math.floor(Math.random() * 100));
    const [ballState, setBallState]   = useState(3);
    const [defaultPosition, setDefaultPosition] = useState(
        {x: 300, y: 0}
    )
    const dragHandlers = {onStart, onStop};

    let arrayBallState = [ballstate.state_wrong, ballstate.state_right, ballstate.state_default];
    function onStart () {
        let stick = document.querySelector("#stick");
        stick.style.display = "block";
    }
    
    function onStop (e, position) {
        console.log(position);
        let x_unexpected = ballNumber / 5;
        let real_x = ballNumber * 8 - x_unexpected;
        // x_unexpected means for each 5cm in ruler, the real width is 39, not 40
        // so we need to reconfigure the real x position
        if( (position.x > (real_x - 4)) && (position.x < (real_x + 4)) ) 
        {    
            console.log('right position');
            setBallState(1);                
            handleRightPosition();
        }
        else{
            console.log('wrong position');
            setBallState(0);
            handleWrongPosition();
        }
    }
    function handleRightPosition() {
        success();
        setTimeout(() => {
            setBallState(2);
            setBallNumber(Math.floor(Math.random() * 100 ));
        }, 1800);
    }

    function handleWrongPosition() {
        fail();
        setTimeout(() => {
            setBallState(2);
            setBallNumber(Math.floor(Math.random() * 100 ));
        }, 1800);
    }
    return(            
        <div className="ruler-game">
            <div className="line">Place the ball on the number line</div>
            <div className="ball_wrapper">
                <Draggable axis='x' bounds="parent" defaultPosition={defaultPosition} {...dragHandlers}>
                    <div className="ball state" style={arrayBallState[ballState]}>
                        <div className="stick" id="stick" style={{ display: "none" }}>
                            <div className="point"></div>
                        </div>
                        <span>{ballNumber}</span>
                    </div>
                </Draggable>
            </div>
            <div className="ruler-field">
                <div className="ruler">
                    <div className="axis">
                        <div className="end_arrow"></div>
                    </div>
                    <Ruler />
                </div>
            </div>
        </div>
    );
}

export default Box(6)(App);