import React, { useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

function Ruler(props) {

    const [progressBallIndex, setProgressBallIndex] = useState(0);
    const [dragActive, setDragActive] = useState(0);
    const [ballNumber, setBallNumber] = useState(63);
    const [ballState, setBallState]   = useState(0);
    const [defaultPosition, setDefaultPosition] = useState(
        {x: 300, y: 0}
    )
    const dragHandlers = {onStart, onStop};
    //above is const

    let prBall0 = { left: "440px", transition: "all .5s ease-out",}
    let prBall1 = { left: "416px", transition: "all .5s ease-out",}
    let prBall2 = { left: "392px", transition: "all .5s ease-out",}
    let prBall3 = { left: "368px", transition: "all .5s ease-out",}
    let prBall4 = { left: "342px", transition: "all .5s ease-out",}
    let prBall5 = { left: "318px", transition: "all .5s ease-out",}

    let state = {
        state_wrong: {
            backgroundImage: "url(../../public/ball_state.png)",
            backgroundPosition: "-228px 0px",
            transition: "all .3s ease-out",
        },
        state_right: {
            backgroundImage: "url(../../public/ball_state.png)",
            backgroundPosition: "0px 0px",
            transition: "all .3s ease-out",
        },
        state_default: {
            backgroundImage: "url(../../public/ball_state.png)",
            backgroundPosition: "-76px 0px",
            transition: "all .3s ease-out",
        }
    }
    let arrayBallState = [state.state_default, state.state_right, state.state_wrong];
    //above is let
    
    // under is function
    function onStart () {
        let stick = document.querySelector("#stick");
        stick.style.display = "block";
        return setDragActive(dragActive+1);
    }
     
    function onStop (e, position) {
        console.log(position);
        if( (position.x > (ballNumber*8-5-2)) && (position.x < (ballNumber*8+5)) ) 
        // because when style in css, the real value x is moved left about 5px
        {    
            console.log('right position');
            setBallState(1);
            handleRightPosition();
        }
        else{
            console.log('wrong position');
            setBallState(2);
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
        setBallNumber(Math.floor(Math.random() * 100 ));
    }

    function moveToWin() {
        window.location.href = "../../public/winner.html";
    }

    function handleWrongPosition() {
        if (progressBallIndex > 0) setProgressBallIndex(progressBallIndex-1);
        // when we decrease the progressBallIndex, the condition in className=inner_progress will be false for the last
        // then the ball will comback to it's default position
        console.log(ballNumber);
        setBallNumber(Math.floor(Math.random() * 100 ));
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
                        <span>Back</span>
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
                                        <div className="ball" id="ballll" style = {arrayBallState[ballState]}>
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