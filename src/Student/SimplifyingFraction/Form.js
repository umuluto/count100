import React from 'react';

var createReactClass = require('create-react-class');

function gcd_two_numbers(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}

class Form extends React.Component {
    render() {
        return (
            <div>
            <div style={{width: 0, height: 0, overflow: 'hidden'}}>
            <span style={{fontFamily: '"Noto Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"PT Sans" !important'}}>.</span>
            <span style={{fontFamily: '"PT Serif" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Alt-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"DejaVu Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Neucha" !important'}}>.</span>
            </div>
            <div className="uchiru_bg_cell" />
            <div className="uchiru_bg_color" />
            <div className="uchiru_bg_stuff" />
            <img className="uchiru_bg_color" src="https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg" />
            <div className="uchiru_box">
                <div className="uchiru_head card with_progress">
                    <a className="back-link" style={{}} onClick={this.props.mainScreen}>
                    <div className="arrow-left" />
                        <span>     Trở lại màn hình chính</span>
                    </a>
                </div>
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
                                        <div className="__inner"><span style={{width: '0px', marginTop: '-3px'}} /><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
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
                                        <div className="__inner"><span style={{width: '0px', marginTop: '-3px'}} /><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Form;