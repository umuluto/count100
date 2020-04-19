import React from 'react';

class OldFraction extends React.Component{
    render() {
        return(
            <div className="container" style={{marginLeft: this.props.coordLeft, marginTop: this.props.coordTop}}>
              <div className="answers">
                <div className="cur-answer" />
                <div className="fraction win">
                  <div className="fraction-inner">
                    <div className="fraction-number numerator">{this.props.numerator}</div>
                    <div className="fraction-line"/>
                    <div className="fraction-number denominator">{this.props.denominator}</div>
                  </div>

                  <div className = "equal win">
                      <span className = "text" style={{
                          fontSize: 30
                      }}> = </span>
                  </div>
                </div>
              </div>
            </div>
        )
    }    
}

export default OldFraction;  