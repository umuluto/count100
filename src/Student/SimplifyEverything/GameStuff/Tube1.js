import React from 'react';

class Tube1 extends React.Component{
    render() {
        return(
          <div className="test_tube test_tube_2">
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
            <div className="arrow_container" style={{position: 'absolute', top: '139px', left: '32px', height: '32px'}}>
                <div className="section" style={{opacity: 1}} id="sprite_14">
                    <div className="point_in_sec" />
                </div>
                <div className="section" style={{opacity: 1}} id="sprite_19">
                    <div className="point_in_sec" />
                </div><div className="section" style={{opacity: 1}} id="sprite_24">
                    <div className="point_in_sec" />
                </div>
                <div className="section" style={{opacity: 1}} id="sprite_29">
                    <div className="point_in_sec" />
                </div>
                <div className="arrow_section" style={{opacity: 1}} id="sprite_34">
                    <div className="arrow_line arrow_line_1" />
                    <div className="arrow_line arrow_line_2" />
                </div>
            </div>
            
            <div className="input focused" style={{position: 'absolute', top: '194px', left: '27px'}} id="sprite_44">
                <div className="_fraction">
                    <div className="input_classic_submit _fraction__numerator focused">
                        <div className="input-body _win32 _centered pointerhand clickable" style={{width: '25px'}}>
                            <div className="input-body__digit _empty">&nbsp;</div>
                            <div className="input-body__carriage" />
                        </div>
                    </div>
                    <div className="_fraction__fraction-line" />
                    <div className="input_classic_submit _fraction__denominator active">
                        <div className="input-body _win32 _centered pointerhand clickable" style={{width: '25px'}}>
                            <div className="input-body__digit _empty">&nbsp;</div>
                            <div className="input-body__carriage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Tube1;