import React from 'react';
import './FillForm.css';

class FillableSquare extends React.Component{

    state = {
        numerator: 0,
        denominator: 0
    }

    handleClick = (e) => {
        this.props.checkAnswer(this.state.numerator, this.state.denominator);
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: parseInt(e.target.value)
        })
    }

    render() {
        return(
                <div className="input_fs_36 disabled" style={{left: '456px', top: '108px', opacity: 1}}>
                    <form>
                        <input className="answerinput1" type="number" id ="numerator" onChange={this.handleChange} min="1" max="100" 
                        style={{
                            marginTop: 4,
                            marginLeft: 1
                        }}></input>
                        <div className="_fraction__fraction-line" />
                        <input className="answerinput1"  type="number" id ="denominator" onChange={this.handleChange} min="1" max="100" style={{
                            marginTop: 4,
                            marginLeft: 1
                        }}></input>
                    </form>
                    <div className="button-basic button-basic_font_ci button-basic_case_all_uc button-basic_color_blue button-basic_fixed input-button" 
                    style={{
                        marginTop: -50,
                        marginLeft: 80
                    }
                    
                    } onClick={this.handleClick}>
                    <div className="button-basic__placeholder ci">OK</div>
                        <div className="button-basic__wrong" />
                        <div className="button-basic__right" />
                        <div className="button-basic__text ci">OK</div>
                    </div>
                </div>

        );
    }
}

export default FillableSquare;