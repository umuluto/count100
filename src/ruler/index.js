import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Ruler from './Ruler'

console.log("Hello");
//const element = <h1>Hello, world</h1>;
function Test1 (props) {
    return (
        <h1 className="t">test</h1>
    );
}
ReactDOM.render(<Test1></Test1>, document.getElementById('root'));
