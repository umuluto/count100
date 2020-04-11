import React from 'react';

class Baloon extends React.Component{
    render() {
        return(
            <div className="container" style={{marginLeft: this.props.coord}}>
              <div className="answers">
                <div className="cur-answer" />
              </div>
              <div className="baloon" >
                <div className="fraction win">
                  <div className="fraction-inner">
                    <div className="fraction-number numerator">{this.props.numerator}</div>
                    <div className="fraction-line" button-basic button-basic_font_ci/>
                    <div className="fraction-number denominator">{this.props.denominator}</div>
                  </div>
                </div>
              </div>

                
            </div>
        )
    }    
}

export default Baloon;