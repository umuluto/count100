import React from 'react';

class Step0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.buttonAttion = this.buttonAttion.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    buttonAttion() {
        var inputValue = this.state.inputValue;
        if (inputValue === '') {
            alert('input empty');
            return ;
        } 
        var inputNumber = Number(inputValue);
        if (inputNumber === 0) {
            alert('0 is abandon');
            return ;
        }
        else if (inputNumber === 1) {
            alert('1 is not interesting');
            return;
        }
        else if (this.props.numerator % inputNumber !== 0 || this.props.denominator % inputNumber !== 0) {
            alert('That is not the common divisor of numerator and denominator');
            return ;
        }
        this.props.setDivisor(inputNumber);
        this.props.switchStep();
    }

    render() {
        return(
            <div className="card_content">
                <div id="board" className="uchiru-place card player-1 script3771 fixed run_on_windows cr" style={{lineHeight: '1.29'}}>
                    <div>
                        <div className="task">Tối giản phân số</div>
                        <div className="sub_task">Viết con số mà cả tử số và mẫu số đều chia hết</div>
                        <div className="action_wrap">
                        <div className="expression_wrap" style={{width: '302px'}}>
                            <div className="fraction">
                            <div className="numerator">
                                <div className="f-input blank">
                                <div className="__outer">
                                <div className="__inner">
                                <span style={{width: '29px', marginTop: '-3px'}}>{this.props.numerator}</span>
                                <span style={{width: '0px', marginTop: '-3px'}} />
                                <div className="__carriage blank" />
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="dash" />
                            <div className="denominator">
                                <div className="f-input blank">
                                <div className="__outer">
                                    <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.props.denominator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                    <div className="__carriage blank" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="sign_equal">=</div>
                            <div className="fraction">
                            <div className="numerator">
                                <div className="f-input blank">
                                <div className="__outer">
                                    <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.props.numerator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                    <div className="__carriage" />
                                    </div>
                                </div>
                                </div><span style={{position: 'relative', top: '8px'}}>÷</span>
                                <div className="f-input active">
                                <div className="__outer">
                                    <div className="__inner">
                                        <span style={{width: '0px', marginTop: '-3px'}} />
                                        <span style={{width: '0px', marginTop: '-3px'}} />
                                        <input
                                        type="text" 
                                        style={{width: "63px", height: "63px", fontSize: "50px", textAlign: 'center'}} 
                                        value={this.state.inputValue}
                                        onChange={this.handleChange} 
                                        />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="dash" />
                            <div className="denominator">
                                <div className="f-input blank">
                                <div className="__outer">
                                    <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.props.denominator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                    <div className="__carriage" />
                                    </div>
                                </div>
                                </div><span style={{position: 'relative', top: '8px'}}>÷</span>
                                <div className="f-input active">
                                <div className="__outer">
                                    <div className="__inner">
                                        <span style={{width: '0px', marginTop: '-3px'}} />
                                        <span style={{width: '0px', marginTop: '-3px'}} />
                                        <input
                                        type="text" 
                                        style={{width: "63px", height: "63px", fontSize: "50px", textAlign: 'center'}} 
                                        value={this.state.inputValue}
                                        onChange={this.handleChange} 
                                        />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button style={{border: "none !important", fontSize:"15px", width: "75px", height: "75px"}} onClick={this.buttonAttion}>
                            OK
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step0;