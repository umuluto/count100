import React, { useEffect, useRef, useState } from 'react';

export default function Input(props) {
    const [value, setValue] = useState('');
    const ref = useRef(null);

    const wrong = String(props.answer).startsWith(value) || 'wrong';
    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleBlur = () => ref.current.focus();

    useEffect(() => {
        if (wrong == 'wrong')
            props.drop();
    }, [wrong]);  // nếu sai thì trừ 1 carrot trng carrot holder

    if (value == props.answer) props.upProgress(); // đúng thì tăng tiến độ progress

    const handleInput = e => {
        const o = e.target.validity.valid ? e.target.value : value;
        setValue(o);
    };



    return (
        <input ref={ref} className={`input input--${wrong}`} onBlur={handleBlur} pattern='[0-9]{0,2}' value={value} onInput={handleInput} />
    );
}
