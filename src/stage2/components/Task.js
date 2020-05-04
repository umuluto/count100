import React, { Component } from 'react';

function Task(props) {
    const styleObject = {
        fontSize: '36px',
        position: 'relative',
        top: '5px',
        lineHeight: '1.29',
    }

    return (
        <div className="tc ma3" style={styleObject}>
            {props.text}
        </div>
    );
}

export default Task;