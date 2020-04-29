import React from 'react';

class StopButton extends React.Component{
    
    handleClick = (e) => {
        this.props.handleStop();
    }

    render(){
        return (
            <div className="button-choice button-choice_font_ci button-choice_case_uc button-choice_color_blue answer-button cant-reduce" onClick={() => {this.props.handleStop()}}>
                <div className="button-choice__placeholder ci" style={{visibility: 'hidden'}}>You can't reduce this fraction</div>
                <div className="button-choice__wrong" />
                <div className="button-choice__right" />
                <div className="button-choice__select" />
                <div className="button-choice__text ci">Phân số này không thể tối giản</div>
            </div>
        )
    }
}

export default StopButton;