import React, { useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

function Ruler(props) {
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
    
    const [dragActive, setDragActive] = useState(0);
    const [ballNumber, setBallNumber] = useState(25);
    const [ballState, setBallState]   = useState(0);
    const [defaultPosition, setDefaultPosition] = useState(
        {x: 300, y: 0}
    )
    const dragHandlers = {onStart, onStop};
    
    function onStart () {
        let stick = document.querySelector("#stick");
        stick.style.display = "block";
        return setDragActive(dragActive+1);
    }
     
    function onStop (e, position) {
        console.log(position);
        if( (position.x > ballNumber*8-5-4) && (position.x < ballNumber*8-1) ) // because when style in css, the real value x is moved left about 5px
        {    
            console.log('right position');
            setBallState(1);
        }
        else{
            console.log('wrong position');
            setBallState(2);
        }
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
                                <i id="ball0" className="rotate_ball_0" style={{left: "4px"}}></i>
                                <i id="ball1" className="rotate_ball_1" style={{left: "28px"}}></i>
                                <i id="ball2" className="rotate_ball_2" style={{left: "52px"}}></i>
                                <i id="ball3" className="rotate_ball_3" style={{left: "76px"}}></i>
                                <i id="ball4" className="rotate_ball_4" style={{left: "100px"}}></i>
                                <i id="ball5" className="rotate_ball_5" style={{left: "124px"}}></i>                            
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
                                            <span>25</span>
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