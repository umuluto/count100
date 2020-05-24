import React, { useState, useEffect } from 'react'

export default function Bunny(props) {
    const checkGame = (props.isDone) ? ('run' + (props.game)) : '';

    useEffect(() => {
        props.setisDone(false);
    }, [props.isDone])

    const end = () => props.setGame(props.game + 1);

    return (
        <div className={'bunny'} style={{ animationName: checkGame, animationDuration: '4s' }} onAnimationEnd={end}/>
    )
}