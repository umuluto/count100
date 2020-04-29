import React from 'react';
import './FillForm.css';

class AnswerButton extends React.Component{
    
    handleClick = (e) => {
        this.props.handleAnswer();
    }

    render(){
        return (
            <div className="button-choice button-choice_font_ci button-choice_case_uc button-choice_color_blue answer-button number-answer" style={{width: '120px', textAlign: 'center'}} onClick={this.handleClick}>
                <div className="button-choice__placeholder ci" style={{visibility: 'hidden'}}> by {this.props.divider}</div>
                <div className="button-choice__wrong" />
                <div className="button-choice__right" />
                <div className="button-choice__select" />
                <div className="button-choice__text" style={{left: this.props.buttonSize, textAlign: 'center'}}> số {this.props.divider}</div>
            </div>
        )
    }
}

export default AnswerButton;