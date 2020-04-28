import React from 'react';

function Ruler(props) {
    return(
        <div className="box_content">
            <div className="box_head bar with_progress">
            <a className="back-link" href="./index.html">
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
                            <div className="ball ready openhand" style={{top: "0px" ,left: "300px" ,opacity: "1", touchAction:"none"}}>
                                <span>25</span>
                                <div className="state wrong"></div>
                                <div className="state right"></div>
                            </div>
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
    );
}

export default Ruler;