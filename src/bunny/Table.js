import React, { useState, useEffect } from 'react';
import Input from './Input'

const arr_roads = [
    [21, 22, 23, 33, 34, 35, 36, 46, 56, 57, 58, 59, 69, 70],
    [61, 62, 52, 42, 43, 44, 45, 46, 56, 66, 76, 77, 78, 68, 69, 59, 60],

]
export default function Table(props) {
    const [progress, setProgress] = useState(1);
    const upProgress = () => setProgress(progress + 1);

    var roads = arr_roads[props.game - 1];

    const cells = [];
    useEffect(() => {
        if (progress == (5)) {
            props.setisDone(true);
            setProgress(1);
        }
    }, [progress]);

    for (let x = 0; x < 10; x++)
        for (let y = 0; y < 10; y++) {
            const num = x * 10 + y + 1;
            let isRoad = '';
            for (let x = 0; x <= progress; x++) {
                if (roads[x] == num) isRoad = 'road';
            }
            const isDark = (x + y) % 2 ? 'dark' : '';

            const isInput = (roads[progress] == num && props.isDone == false);

            cells.push(
                <div key={x * 10 + y} className={`table__cell table__cell--${isRoad} table__cell--${isDark}`}>
                    {isInput ? <Input upProgress={upProgress} answer={num} /> : <span className='table__cell__text' >{num}</span>}
                </div>);
        }

    return (
        <div className='table'>
            {cells}
        </div>
    );
}