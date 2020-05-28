import React, { useEffect, useReducer, useRef, useState } from 'react';

export default function Input(props) {
    const [value, setValue] = useState('');
    const wrong = (value == props.answer || value == Math.floor(props.answer / 10) || value == '') ? '' : 'wrong';
    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus();
    }, []);

    // useEffect(() => {
        if (wrong == 'wrong')
            props.setcarrotHolder(props.carrotHolder - 1);
        
        if(value == props.answer) props.upProgress();
    // }, [wrong]);

    const handleBlur = () => ref.current.focus();
    const handleInput = e => {
        const o = e.target.validity.valid ? e.target.value : value;
        setValue(o);
    };


    return (
        <input ref={ref} className={`input input--${wrong}`} onBlur={handleBlur} pattern='[0-9]{0,2}' value={value} onInput={handleInput} />
    );
}