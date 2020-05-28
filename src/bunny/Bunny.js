import React, { useState, useEffect } from 'react'

export default function Bunny({ isDone, end, game }) {
    const [pos, setPos] = useState({});

    useEffect(() => {
        if (isDone) setPos(_getPos(0));
    }, [isDone]);

    const checkpoints = [
        [21, 23, 33, 36, 56, 59, 69, 70],
        [61, 62, 42, 46, 76, 77, 78, 68, 69, 59, 60],
        [81, 84, 44, 45, 47, 27, 30],
        [31, 33, 43, 45, 48, 68, 69, 79, 99, 100],
        [11, 12, 2, 5, 25, 35, 37, 17, 19, 9, 10],
        [81, 83, 73, 77, 67, 57, 58, 48, 49, 29, 30],
        [21, 23, 33, 43, 45, 15, 18, 58, 60]
    ];
    var checkRoad = checkpoints[game - 1];
    const _getPos = idx => {
        const next = checkRoad[idx];
        const x = ((next - 1) % 10) * 50;
        const y = Math.floor((next - 1) / 10) * 50 - 50;
        return { x, y };
    };

    const getIns = posIdx => {
        return posIdx == checkRoad.length - 1 ? end : () => {
            setDoEnd(() => getIns(posIdx + 1));
            setPos(_getPos(posIdx));

        }
    };

    const [doEnd, setDoEnd] = useState(() => getIns(0));

    const style = {
        left: pos.x,
        top: pos.y,
    }

    return (
        <div className='bunny' style={style} onTransitionEnd={doEnd} />
    );
}