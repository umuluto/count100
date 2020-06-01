import React, { useState, useEffect } from 'react'

function _getNext(road, posIdx) {
    const direction = road[posIdx + 1] - road[posIdx];

    const pathIdx = road.slice(posIdx + 1)
	.findIndex((e, i, a) => a[i + 1] && (a[i + 1] - e != direction));

    return pathIdx != -1 ? posIdx + pathIdx + 1 : road.length - 1;
}

export default function Bunny({ isDone, end, road }) {
    const [posIdx, setPosIdx] = useState(-1);

    useEffect(() => {
	if (isDone) setPosIdx(0);
    }, [isDone]);

    const doEnd = () => {
	if (posIdx == road.length - 1) {
	    end();
	} else {
	    setPosIdx(_getNext(road, posIdx));
	}
    };

    const x = ((road[posIdx] - 1) % 10) * 50;
    const y = Math.floor((road[posIdx] - 1) / 10) * 50 - 50;

    const style = posIdx < 0 ? {} :
	{
	    transform: `translate(${x}px, ${y}px)`,
	};

    return (
	<div className='bunny' style={style} onTransitionEnd={doEnd} />
    );
}
