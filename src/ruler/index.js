import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

console.log("Hello");
const element = <h1>Hello, world</h1>;
function test1 (props) {
    return (
        <h1 className="t">test</h1>
    );
}
ReactDOM.render(element, document.getElementById('root'));
