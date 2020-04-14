import React from 'react';
import './App.css';
import Student from './Student/Student';
import Lecturer from './Lecturer/Lecturer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        };
        this.switchScreen = this.switchScreen.bind(this);
    }

    switchScreen(idScreen) {
        this.setState({
            screen: idScreen
        });
    }

    renderedScreen() {
        switch(this.state.screen) {
            case 1:
                return <Student mainScreen={() => this.switchScreen(0)} /> ;
            case 2:
                return <Lecturer mainScreen={() => this.switchScreen(0)} />
            default:
                return (
                    <div className="slides_wrapper">
                        <div className="slide">
                            <div className="text_wrapper">
                                <a href="https://dragonlearn.in/" className="btn-uchiru-logo"></a>
                                <div className="container-fluid invite-selector container-equal-heights">
                                    <div className="col-sm-12 align-center col-lg-6 col-md-6">
                                        <div className="row fixed-height">
                                                <div className="invite-block">
                                                    <button onClick={() => this.switchScreen(2)}>
                                                        <img 
                                                        src="https://dragonlearn.in/assets/invite/india/teacher-3d51186540f1f97466b800a646f6b5e0.svg"
                                                        alt=""
                                                        style={{height:'180px'}}
                                                        ></img>
                                                    </button>
                                                </div>
                                            <h2><b>Giáo viên</b></h2>
                                            <div className="column-desc">Bạn có thể tạo bài cho học sinh làm</div>
                                        </div>
                                        <div className="row invite-row">
                                            <a className="invites--button" id="teacher-select-button" onClick={() => this.switchScreen(2)}>
                                                Tiếp Tục
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 align-center col-lg-6 col-md-6">
                                        <div className="row fixed-height">
                                            <div className="invite-block">
                                                <button onClick={() => this.switchScreen(1)}>
                                                    <img 
                                                    src="https://dragonlearn.in/assets/invite/india/teacher-3d51186540f1f97466b800a646f6b5e0.svg"
                                                    alt=""
                                                    style={{height:'180px'}}
                                                    ></img>
                                                </button>
                                            </div>
                                            <h2><b>Học Sinh</b></h2>
                                            <div className="column-desc">Bạn có thể làm các bài kiểm tra</div>
                                        </div>
                                        <div className="row invite-row">
                                            <a className="invites--button" id="parent-select-button" onClick={() => this.switchScreen(1)}>
                                                Tiếp Tục
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    render() {
        return this.renderedScreen();
    }
}

export default App;