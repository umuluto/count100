import React from 'react';
import { Spring } from 'react-spring/renderprops';

class Step0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.buttonAttion = this.buttonAttion.bind(this)
        this.textInput = React.createRef();
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    buttonAttion() {
        var inputValue = this.state.inputValue;
        if (inputValue === '') {
            alert('Các ô phải được điền đẩy đủ');
            return;
        }
        var inputNumber = Number(inputValue);
        if (inputNumber === 0) {
            alert('Không được chọn số 0');
            return;
        }
        else if (inputNumber === 1) {
            alert('Số 1 thì hiển nhiên quá');
            return;
        }
        else if (this.props.numerator % inputNumber !== 0 || this.props.denominator % inputNumber !== 0) {
            alert('Không phải ước chung của tử số và mẫu số');
            return;
        }
        this.props.setDivisor(inputNumber);
        this.props.switchStep();
    }

    componentDidMount() {
        this.textInput.current.focus();
        var input = document.getElementById("input-step-0-1");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("button-step-0").click();
            }
        });

        var input2 = document.getElementById("input-step-0-2");
        input2.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("button-step-0").click();
            }
        });
    }

    render() {
        return (
            <Spring
                from={{ transform: 'translate3d(200px, 0, 0)' }}
                to={{ transform: 'translate3d(0px, 0, 0)' }}
            >
                {
                    props => (
                        <div className="card_content" style={props}>
                            <div id="board" className="uchiru-place card player-1 script3771 fixed run_on_windows cr" style={{ lineHeight: '1.29' }}>
                                <div>
                                    <div className="task">Tối giản phân số</div>
                                    <div className="sub_task">Viết con số mà cả tử số và mẫu số đều chia hết</div>
                                    <div className="action_wrap">
                                        <div className="expression_wrap" style={{ width: '302px' }}>
                                            <div className="fraction">
                                                <div className="numerator">
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
                                                            <div className="__inner"><span style={{ width: '29px', marginTop: '-3px' }}>{this.props.denominator}</span><span style={{ width: '0px', marginTop: '-3px' }} />
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
                                                            <div className="__inner"><span style={{ width: '29px', marginTop: '-3px' }}>{this.props.numerator}</span><span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <div className="__carriage" />
                                                            </div>
                                                        </div>
                                                    </div><span style={{ position: 'relative', top: '8px' }}>÷</span>
                                                    <div className="f-input active">
                                                        <div className="__outer">
                                                            <div className="__inner">
                                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <input
                                                                    type="text"
                                                                    style={{ width: "63px", height: "63px", fontSize: "50px", textAlign: 'center' }}
                                                                    value={this.state.inputValue}
                                                                    onChange={this.handleChange}
                                                                    ref={this.textInput}
                                                                    id="input-step-0-1"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dash" />
                                                <div className="denominator">
                                                    <div className="f-input blank">
                                                        <div className="__outer">
                                                            <div className="__inner"><span style={{ width: '29px', marginTop: '-3px' }}>{this.props.denominator}</span><span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <div className="__carriage" />
                                                            </div>
                                                        </div>
                                                    </div><span style={{ position: 'relative', top: '8px' }}>÷</span>
                                                    <div className="f-input active">
                                                        <div className="__outer">
                                                            <div className="__inner">
                                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <span style={{ width: '0px', marginTop: '-3px' }} />
                                                                <input
                                                                    type="text"
                                                                    style={{ width: "63px", height: "63px", fontSize: "50px", textAlign: 'center' }}
                                                                    value={this.state.inputValue}
                                                                    onChange={this.handleChange}
                                                                    id="input-step-0-2"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            style={{ border: "none !important", fontSize: "15px", width: "75px", height: "75px" }}
                                            onClick={this.buttonAttion}
                                            id="button-step-0"
                                        >
                                            OK
                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Spring>
        );
    }
}

export default Step0;