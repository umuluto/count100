import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/app-actions';
import lecturerActions from '../actions/lecturer-actions';
import './Lecturer.scss';
import Home from './Home'

const Buttons = (props) => {
    const listContent = [
        'Quay về màn hình chính', 
        'Tối giản phân số', 
        '2', 
        'Tối giản từng bước một', 
        'Tối giản mọi thứ', 
        'Khi nào tối giản'
    ]
    const onClickActions = [
        props.Home,
        () => {
            document.getElementById("check").checked = false;
            props.Simplifying();
        },
        () => {
            document.getElementById("check").checked = false;
        },
        () => {
            document.getElementById("check").checked = false;
        },
        () => {
            document.getElementById("check").checked = false;
            props.SimplifyEverything();
        },
        () => {
            document.getElementById("check").checked = false;
            props.WhenToSimplify();
        }
    ]
    var result = [];
    for (let i = 0; i < 6; ++i) {
        result.push(
            <div key={i}>
                <a onClick={onClickActions[i]} style={{ width: '250px' }}>
                    <svg className="icon-arrow before">
                        <use xlinkHref="#arrow" />
                    </svg>
                    <span className="label">{listContent[i]}</span>
                    <svg className="icon-arrow after">
                        <use xlinkHref="#arrow" />
                    </svg>
                </a>
                <svg style={{ display: 'none' }}>
                    <defs>
                        <symbol id="arrow" viewBox="0 0 35 15">
                            <title>Arrow</title>
                            <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z " />
                        </symbol>
                    </defs>
                </svg>
            </div>
        )
    }
    return <div className="top">{result}</div>
}

class Lecturer extends React.Component {
    render() {
        return (
            <div id="lecturer-component">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <svg viewBox="0 0 30 30" width={30} height={30}>
                        <path id="one" d="M4 10h22M4" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                        <path id="two" d="M4 20h22M4" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                    </svg> Menu
                </label>
                <aside>
                    <Buttons
                        Home={this.props.Home}
                        Simplifying={this.props.Simplifying}
                        SimplifyEverything={this.props.SimplifyEverything}
                        WhenToSimplify={this.props.WhenToSimplify}
                    />
                </aside>
                <article>
                    <div className="wrapper">
                        <div className="content">
                            <Home />
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        Home: () => dispatch(actions.Home),
        Simplifying: () => dispatch(lecturerActions.Simplifying),
        WhenToSimplify: () => dispatch(lecturerActions.WhenToSimplify),
        SimplifyEverything: () => dispatch(lecturerActions.SimplifyEverything)
    }
}

export default connect(null, mapDispatchtoProps)(Lecturer);