import React from 'react';
import './TubeStyle.css';

function gcd_two_numbers(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  

class Tube1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numerator: -1,
            denominator: -1
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: parseInt(e.target.value)
        }, () => {
            if(this.state.numerator <= 0 || this.state.numerator > 9) return this.props.wrongAns();
            if(this.state.denominator <= 0 || this.state.denominator > 9) return this.props.wrongAns();
            if(this.state.numerator * this.props.denominator != this.state.denominator * this.props.numerator) return this.props.wrongAns();
            if(gcd_two_numbers(this.state.denominator, this.state.numerator) != 1) return this.props.wrongAns();
            return this.props.correctAns();
        });
    }

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
                        {/* <div className="input-body _win32 _centered pointerhand clickable" style={{width: '25px'}}>
                            <div className="input-body__digit _empty">&nbsp;</div>
                            <div className="input-body__carriage" />
                        </div> */}

                        <input className="answerinput" type="number" id ="numerator" min="1" max="9" onChange={this.handleChange}></input>
                    </div>
                    <div className="_fraction__fraction-line" />
                    <div className="input_classic_submit _fraction__denominator active">
                        {/* <div className="input-body _win32 _centered pointerhand clickable" style={{width: '25px'}}>
                            <div className="input-body__digit _empty">&nbsp;</div>
                            <div className="input-body__carriage" />
                        </div> */}

                        <input className="answerinput" type="number" id ="denominator" min="1" max="9" onChange={this.handleChange}></input>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Tube1;