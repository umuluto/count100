import React, { useEffect, useReducer, useRef, useState } from 'react';

export default function Input({ answer, upProgress }) {
    const [value, setValue] = useState('');
    const [wrong, setWrong] = useState('');
    const ref = useRef(null);
    const roads_1 = [21, 22, 23, 33, 34, 35, 36, 46, 56, 57, 58, 59, 69, 70];
    const roads_2 = [61, 62, 52, 42, 43, 44, 45, 46, 56, 66, 76, 77, 78, 68, 69, 59, 60];
    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleBlur = () => ref.current.focus();
    const handleInput = e => {
        const o = (e.target.validity.valid) ? e.target.value : value;
        if (o == Math.floor(answer / 10) || o == '') { setWrong('') }
        else if (o == answer) upProgress();
        else setWrong('wrong');
        setValue(o);
    }

    return (
        <input ref={ref} className={`input input--${wrong}`} onBlur={handleBlur} pattern='[0-9]{0,2}' value={value} onInput={handleInput} />
    );
}