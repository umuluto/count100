import React from 'react';

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeratorResult: '',
            denominatorResult: ''
        }
        this.handleButton = this.handleButton.bind(this)
        this.textInput = React.createRef()
    }

    handleNumerator = (event) => {
        this.setState({
            numeratorResult: event.target.value
        });
    }

    handleDenominator = (event) => {
        this.setState({
            denominatorResult: event.target.value
        })
    }

    handleButton = () => {
        var numeratorResult = Number(this.state.numeratorResult)
        var denominatorResult = Number(this.state.denominatorResult)
        if (this.props.numerator / this.props.divisor !== numeratorResult ||
            this.props.denominator / this.props.divisor !== denominatorResult) {
            alert('Wrong Answer!');
            return;
        }
        this.props.switchStep();
        if (gcd_two_numbers(numeratorResult, denominatorResult) === 1) this.props.nextExam();
        else this.props.changeInfo(numeratorResult, denominatorResult)
    }

    componentDidMount() {
        this.textInput.current.focus()
        var input = document.getElementById("input-step-1-1");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("button-step-1").click();
            }
        });
        
        var input2 = document.getElementById("input-step-1-2");
        input2.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("button-step-1").click();
            }
        });
    }

    render() {
        return (
            <div className="card_content">
                <div id="board" className="uchiru-place card player-1 script3771 fixed run_on_windows cr" style={{ lineHeight: '1.29' }}>
                    <div className="scene">
                        <div className="task">Tối giản phân số</div>
                        <div className="sub_task" id="sprite_4" style={{ opacity: 1 }}>Viết đáp án</div>
                        <div className="action_wrap">
                            <div className="expression_wrap" style={{ width: '427px' }} id="sprite_5">
                                <div className="fraction"><div className="numerator">
                                    <div className="f-input blank">
                                        <div className="__outer">
                                            <div className="__inner">
                                                <span style={{ width: '29px', marginTop: '-3px' }}>{this.props.numerator}</span>
                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                <div className="__carriage blank" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="dash" />
                                    <div className="denominator">
                                        <div className="f-input blank">
                                            <div className="__outer">
                                                <div className="__inner">
                                                    <span style={{ width: '29px', marginTop: '-3px' }}>{this.props.denominator}</span>
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
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
                                                <div className="__inner">
                                                    <span style={{ width: '29px', marginTop: '-3px' }}>{this.props.numerator}</span>
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <div className="__carriage" />
                                                </div>
                                            </div>
                                        </div>
                                        <span style={{ position: 'relative', top: '8px' }}>÷</span>
                                        <div className="f-input cl-input blank pointerhand clickable" id="sprite_1">
                                            <div className="__outer"><div className="__inner">
                                                <span style={{ width: '29px', marginTop: '-3px', position: 'absolute', left: '0%' }}>{this.props.divisor}</span>
                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                <div className="__carriage blank" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash" />
                                    <div className="denominator">
                                        <div className="f-input blank">
                                            <div className="__outer">
                                                <div className="__inner">
                                                    <span style={{ width: '29px', marginTop: '-3px' }}>{this.props.denominator}</span>
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <div className="__carriage" />
                                                </div>
                                            </div>
                                        </div>
                                        <span style={{ position: 'relative', top: '8px' }}>÷</span>
                                        <div className="f-input cl-input blank pointerhand clickable" id="sprite_2">
                                            <div className="__outer">
                                                <div className="__inner">
                                                    <span style={{ width: '29px', marginTop: '-3px', position: 'absolute', left: '0%' }}>{this.props.divisor}</span>
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <div className="__carriage blank" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sign_equal" style={{ opacity: 1 }} id="sprite_6">=</div>
                                <div className="fraction" style={{ opacity: 1 }} id="sprite_7">
                                    <div className="numerator">
                                        <div className="f-input focused cl-input pointerhand clickable" id="sprite_8">
                                            <div className="__outer">
                                                <div className="__inner">
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <input
                                                        type="text"
                                                        style={{ width: "63px", height: "63px", fontSize: "50px", textAlign: 'center' }}
                                                        value={this.state.numeratorResult}
                                                        onChange={this.handleNumerator}
                                                        ref={this.textInput}
                                                        id="input-step-1-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash" />
                                    <div className="denominator">
                                        <div className="f-input active cl-input pointerhand clickable" id="sprite_9">
                                            <div className="__outer">
                                                <div className="__inner">
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <span style={{ width: '0px', marginTop: '-3px' }} />
                                                    <input
                                                        type="text"
                                                        style={{ width: "63px", height: "63px", fontSize: "50px", textAlign: 'center' }}
                                                        value={this.state.denominatorResult}
                                                        onChange={this.handleDenominator}
                                                        id="input-step-1-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button style={{ border: "none !important", fontSize: "15px", width: "75px", height: "75px" }} onClick={this.handleButton} id="button-step-1">
                                OK
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;