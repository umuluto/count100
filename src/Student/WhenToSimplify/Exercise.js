import React from 'react';
import { connect } from 'react-redux'; 
import StudentActions from '../../actions/student-actions';
import WhenToSimplifyActions from '../../actions/when-to-simplify-actions';
import './Exercise.css';

function Sign(props) {
    return ((props.type === 0) ? 
    <span className="multiplication">×</span> : 
    <span className="multiplication">+</span>);
}

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.Question
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(nextProps.Question)
    }

    gcd_two_numbers = (x, y) => {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
    }

    render() {
        var numerator1, denominator1, middleNumber;
        if (this.state.type === 0) {
            middleNumber = this.gcd_two_numbers(this.state.numerator, this.state.denominator)
            numerator1 = this.state.numerator / middleNumber
            denominator1 = this.state.denominator / middleNumber
        }
        else {
            var max = Math.min(this.state.numerator, this.state.denominator);
            var min = 1;
            middleNumber = Math.floor(Math.random() * (max - min + 1) + min);
            middleNumber = Math.min(middleNumber, 9)
            numerator1 = this.state.numerator - middleNumber;
            denominator1 = this.state.denominator - middleNumber;
        }
        return (
            <div className="uchiru_box">
                <div className="uchiru_head card with_progress">
                    <a className="back-link" onClick={this.props.mainScreen}>
                        <div className="arrow-left" />
                        <span>      Trở lại màn hình chính</span>
                    </a>
                    <div className="beads-wrapper">
                        <div id="progress">
                            <span>Đã hoàn thành {this.props.screen} / {this.props.len}</span>
                        </div>
                    </div>
                </div>
                <div className="card_content">
                    <div id="board" className="uchiru-place card player-1 script13807 fixed">
                        <div className="scene finished">
                            <div className="title">Duy Anh đã tối giản phân số đúng chưa?</div>
                            <div className="board">
                                <div className="boy" />
                                <div className="first_fraction fraction" id="sprite_1" style={{opacity: 1}}>
                                    <div className="numer">{this.state.numerator}</div>
                                    <div className="dash" />
                                    <div className="denom">{this.state.denominator}</div>
                                </div>
                                <div className="equal_sign fraction" id="sprite_2" style={{opacity: 1}}>=</div>
                                <div className="second_fraction fraction" id="sprite_3" style={{opacity: 1}}>
                                    <div className="numer"><span className="red_cross2">{middleNumber}</span> <Sign type = {this.state.type} /> {numerator1}</div>
                                    <div className="dash" />
                                    <div className="denom"><span className="red_cross2">{middleNumber}</span> <Sign type = {this.state.type} /> {denominator1}</div>
                                </div>
                                <div className="equal_sign fraction" id="sprite_6" style={{opacity: 1}}>=</div>
                                <div className="third_fraction fraction" id="sprite_7" style={{opacity: 1}}>
                                    <div className="numer">{numerator1}</div>
                                    <div className="dash" />
                                    <div className="denom">{denominator1}</div>
                                </div>
                            </div>
                            <div className="true_red_cross2" id="sprite_4" style={{top: '200px', left: '436.625px', opacity: 1}} />
                            <div className="true_red_cross2" id="sprite_5" style={{top: '252px', left: '436.906px', opacity: 1}} />
                            <button 
                            className="button-basic button-basic_font_ci button-basic_case_uc button-basic_color_blue button button_1 pointerhand clickable" 
                            style={{width: "40px", height: "40px"}}
                            onClick={() => {
                                if (this.state.type === 0) this.props.nextQuestion();
                                else alert('Wrong Answer!!!');
                            }}
                            >
                                <div className="button-basic__placeholder ci">Đúng</div>
                            </button>
                            <button 
                            className="button-basic button-basic_font_ci button-basic_case_uc button-basic_color_blue button button_2 pointerhand clickable" 
                            style={{width: "40px", height: "40px"}}
                            onClick={() => {
                                if (this.state.type === 1) this.props.nextQuestion();
                                else alert('Wrong Answer!!!');
                            }}
                            >
                                <div className="button-basic__placeholder ci" style={{textAlign: "center"}}>Sai</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => {
            dispatch(StudentActions.Home)
            dispatch(WhenToSimplifyActions.Home)
        }
    }
}

export default connect(null, mapDispatchtoProps)(Exercise);