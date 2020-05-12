import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Ruler(props) {

    //this part for creating state required
    const [progressBallIndex, setProgressBallIndex] = useState(0);
    const [ballNumber, setBallNumber] = useState(63);
    const [ballState, setBallState]   = useState(3);
    const [defaultPosition, setDefaultPosition] = useState(
        {x: 300, y: 0}
    )
    const dragHandlers = {onStart, onStop};

    // prBall is used for moving progress ball when user determines the 
    //right position or wrong position
    let prBall0 = { left: "440px", transition: "all .5s ease-out",}
    let prBall1 = { left: "416px", transition: "all .5s ease-out",}
    let prBall2 = { left: "392px", transition: "all .5s ease-out",}
    let prBall3 = { left: "368px", transition: "all .5s ease-out",}
    let prBall4 = { left: "342px", transition: "all .5s ease-out",}
    let prBall5 = { left: "318px", transition: "all .5s ease-out",}

    // when user chooses the right or wrong position, state need to be updated
    // for now, I choose to change background color
    let state = {
        state_wrong: {
            backgroundColor: "#fb9766",
            boxShadow: "5px -13px 10px 7px #b04f20 inset",
            transition: "background .8s ease-out",
        },
        state_right: {
            backgroundColor: "#91ea54",
            boxShadow: "5px -13px 10px 7px #47ac23 inset",
            transition: "background .8s ease-out",
        },
        state_default: {
            backgroundColor: "#81ccea",
            boxShadow: "5px -13px 10px 7px #5c88b7 inset",
            transition: "background .8s ease-out",
        }
    }
    let arrayBallState = [state.state_wrong, state.state_right, state.state_default];
    // I use array because, draggable only accept direct style property for inline

    // when user starts to move the ball, a stick will appear for easing the determine coordinate 
    function onStart () {
        let stick = document.querySelector("#stick");
        stick.style.display = "block";
    }
     
    // when user finish drag, some event needed to be handled
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
        if (progressBallIndex <= 5) setProgressBallIndex(progressBallIndex+1);
        console.log(progressBallIndex);
        if(progressBallIndex == 5) { 
            setTimeout(() => {
                moveToWin();
            }, 2000);
        }
        setTimeout(() => {
            setBallState(2);
            setBallNumber(Math.floor(Math.random() * 100 ));
        }, 1800);
        
    }

    function handleWrongPosition() {
        if (progressBallIndex > 0) setProgressBallIndex(progressBallIndex-1);
        // when we decrease the progressBallIndex, the condition in className=inner_progress will be false for the last
        // then the ball will comback to it's default position
        console.log(ballNumber);
        setTimeout(() => {
            setBallState(2);
            setBallNumber(Math.floor(Math.random() * 100 ));            
        }, 1800);
    }

    function moveToWin() {
        window.location.href = "../../public/winner.html";
    }

    return(
        <div className="page">
            <div className="bg_cell"></div>
            <div className="bg_color_stuff"></div>
            <div className="bg_stuff"></div>
            <img className="bg_color" src="bg_color.jpg" />
            <div className="box_content">
                <div className="box_head bar with_progress">
                    <a className="back-link" href="../../public/index.html">
                        <div className="arrow-left"></div>

                        <span> Back</span>
                    </a>
                    <div className="bar_wrapper">                        
                            <div className="inner_progress">
                                <i id="ball0" className="rotate_ball_0" style={ progressBallIndex > 5 ? prBall5 : {left: "4px"}}></i>
                                <i id="ball1" className="rotate_ball_1" style={ progressBallIndex > 4 ? prBall4 : {left: "28px"}}></i>
                                <i id="ball2" className="rotate_ball_2" style={ progressBallIndex > 3 ? prBall3 : {left: "52px"}}></i>
                                <i id="ball3" className="rotate_ball_3" style={ progressBallIndex > 2 ? prBall2 : {left: "76px"}}></i>
                                <i id="ball4" className="rotate_ball_4" style={ progressBallIndex > 1 ? prBall1 : {left: "100px"}}></i>
                                <i id="ball5" className="rotate_ball_5" style={ progressBallIndex > 0 ? prBall0 : {left: "124px"}}></i>                            
                            </div>
                    </div>
                </div>
            
                <div className="card_content">
                    <div className="line">Place the ball on the number line</div>
                    <div className="game_field_under">
                        <div className="number_axis_inner">
                            <div className="axis">
                                <div className="end_arrow"></div>
                                <div className="ball_wrapper">
                                    <Draggable axis='x' bounds="parent" defaultPosition={defaultPosition} {...dragHandlers}>
                                        <div className="ball state" style = {arrayBallState[ballState]}>
                                            <div className="stick" id="stick" style={{display: "none"}}>
                                                <div className="point"></div>
                                            </div>
                                            <span>{ballNumber}</span>
                                        </div>
                                    </Draggable>
                                </div>
                            </div>
                            <div className="a_border a_start">
                                <span></span>
                            </div>
                            <div className="a_border a_end">
                                <span>100</span>
                            </div>
                            <div className="decimal divider">
                                <span></span>
                                <div className="number big size">0</div
                                ><div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="number big size">50</div>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal divider">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div><div className="decimal">
                                <span></span>
                                <div className="mm fst"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div
                                ><div className="mm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ruler;