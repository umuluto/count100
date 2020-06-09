import React, { useState, useEffect } from 'react'

function _getNext(road, posIdx) {
    const direction = road[posIdx + 1] - road[posIdx];

    const pathIdx = road.slice(posIdx + 1)
        .findIndex((e, i, a) => a[i + 1] - e != direction);

    return {
        posIdx: pathIdx != -1 ? posIdx + pathIdx + 1 : road.length - 1,
        direction: direction == 1 ?
            'right'
            : direction == 10 ?
                'down'
                : direction == -10 ?
                    'up'
                    : 'right',
    }
}

export default function Bunny({ win, isDone, end, road }) {
    const [state, setState] = useState({ posIdx: -3, direction: undefined });
    useEffect(() => {
        if (isDone) {
            setState({ ...state, posIdx: -2 });
        }
    }, [isDone]);

    // useEffect(() => {
    //     if (posIdx == 0) win();
    // }, [posIdx]);

    const doEnd = () => {
        if (state.posIdx == -3) {
            setState({ ...state, posIdx: -2 });
        } else if (state.posIdx == -2) {
            setState({ ...state, posIdx: -1 });
            win();
        }
        else if (state.posIdx == road.length - 1) {
            end();
        } else {
            setState(_getNext(road, state.posIdx));
        }
    };

    const x = ((road[state.posIdx] - 1) % 10) * 50 - 13;                  // toạ độ left thỎ
    const y = Math.floor((road[state.posIdx] - 1) / 10) * 50 - 50;        // toạ độ top của thỏ
    const entranceY = Math.floor((road[0] - 1) / 10) * 50 - 50;

    const pos = state.posIdx == -3 ?
        {} :
        state.posIdx == -2 ?
            {
                transform: 'translate(-90px, 49px)',
            } : state.posIdx == -1 ?
                {
                    transform: `translate(-90px, ${entranceY}px)`,
                    backgroundPositionX: -560,
                } :
                {
                    transform: `translate(${x}px, ${y}px)`,
                };

    return (
        <div className={`bunny bunny--${state.direction}`} style={pos} onTransitionEnd={doEnd} />
    );
}
