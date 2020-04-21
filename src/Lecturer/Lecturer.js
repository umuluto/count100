import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/app-actions';
import './Lecturer.scss';

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
                <div className="top">
                    <button onClick={this.props.Home}>Trở lại</button>
                    <button>SimplifyingFraction</button>
                    <button>Nav text</button>
                    <button>StepByStep</button>
                    <button>Nav text</button>
                    <button>WhenToSimplify</button>
                </div>
                </aside>
                <article>
                <div className="wrapper">
                    <div className="content">
                    <h1>Off-Canvas menu on Pure CSS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum unde porro consequatur doloribus ex distinctio similique, voluptas repellendus voluptates nam dolorum! Repudiandae maxime, itaque vero dolorem distinctio inventore explicabo!</p>
                    <p>Odio eaque cum blanditiis esse, earum saepe voluptate quae aliquid possimus facere non qui illo necessitatibus eveniet ab sit quaerat. Atque animi nulla veritatis molestiae qui ipsam ut assumenda facilis?</p>
                    </div>
                </div>
                </article>
          </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        Home: () => dispatch(actions.Home)
    }
}

export default connect(null, mapDispatchtoProps)(Lecturer);