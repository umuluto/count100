import React, { useState, useEffect } from 'react';
import Bunny from './Bunny';
import Input from './Input';

export default function Table({road, drop, finish}) {
    const [progress, setProgress] = useState(1);
    const upProgress = () => setProgress(progress + 1);

    const cells = [];
    for (let x = 0; x < 10; x++) {
	for (let y = 0; y < 10; y++) {
	    const num = x * 10 + y + 1;
	    const roadIdx = road.indexOf(num);
	    const isRoad = roadIdx > -1 && roadIdx <= progress && 'road';
	    const isDark = (x + y) % 2 && 'dark';

	    const isInput = road[progress] == num;

	    cells.push(
		<div key={x * 10 + y}
		    className={`table__cell table__cell--${isRoad} table__cell--${isDark}`}>
		    {isInput ? <Input upProgress={upProgress} answer={num} drop={drop} /> :
			<span className='table__cell__text' >{num}</span>}
		</div>
	    );
	}
    }
    
    const posEntrance = (road[0] - 1) * 5 - 12; // set pos entrance
    const posExit = road[road.length - 1] * 5 - 88;

    return (
	<div className='table'>
	    {cells}
	    <Bunny isDone={progress >= road.length} end={finish} road={road} />
	    <div className="entrance" style={{ top: posEntrance }} />
	    <div className="exit" style={{ top: posExit }}>
		<div className="door" />
	    </div>
	</div>
    );
}
