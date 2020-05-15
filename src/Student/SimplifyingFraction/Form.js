import React from 'react';
import './Form.css';
import Step from './Step';
import GreenBead from '../MainScreen/GreenBead';

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
                    <div className="beads-wrapper">
                        <div id="progress">
                            <GreenBead 
                                screen={this.props.screen}
                                len={this.props.len}
                            />
                        </div>
                    </div>
                </div>
                <Step 
                    numerator={this.props.numerator}
                    denominator={this.props.denominator}
                    nextExam={this.props.nextScreen}
                    mainScreen={this.props.mainScreen}
                />
            </div>
        </div>
        );
    }
}

export default Form;