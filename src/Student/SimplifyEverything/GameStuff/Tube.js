import React from 'react';

class Tube extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return(
            <div className="test_tube test_tube_0">
                    <div className="input blank" style={{position: 'absolute', top: '73px', left: '27px'}}>
                    <div className="_fraction">
                        <div className="input_classic_submit _fraction__numerator blank">
                        <div className="input-body _win32 _centered" style={{width: '25px'}}>
                            <div className="input-body__digit">{this.props.numerator}</div>
                            <div className="input-body__carriage" />
                        </div>
                        </div>
                    <div className="_fraction__fraction-line" />
                        <div className="input_classic_submit _fraction__denominator blank">
                        <div className="input-body _win32 _centered" style={{width: '25px'}}>
                            <div className="input-body__digit">{this.props.denominator}</div>
                            <div className="input-body__carriage" />
                        </div>
                        </div>
                    </div>
                    </div>
                <div className="arrow_container" style={{position: 'absolute', top: '139px', left: '32px', height: '50px'}}>
                    <div className="section" style={{opacity: 0}} id="sprite_1">
                    <div className="point_in_sec" />
                    </div>

                    <div className="section" style={{opacity: 0}} id="sprite_2">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="section" style={{opacity: 0}} id="sprite_3">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="section" style={{opacity: 0}} id="sprite_4">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="section" style={{opacity: 0}} id="sprite_5">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="section" style={{opacity: 0}} id="sprite_6">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="section" style={{opacity: 0}} id="sprite_7">
                    <div className="point_in_sec" />
                    </div>
                    
                    <div className="arrow_section" style={{opacity: 0}} id="sprite_8">
                    <div className="arrow_line arrow_line_1" />
                    <div className="arrow_line arrow_line_2" />
                    </div>
                </div>
                <div className="input_classic blank" style={{position: 'absolute', top: '210px', left: '29px'}} id="sprite_42">
                    <div className="input-body _win32">
                        <div className="input-body__digit">0</div>
                        <div className="input-body__carriage" />
                    </div> 
                </div>
            </div>
        )
    }
}

export default Tube;