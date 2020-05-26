import React from 'react'
export default Cell;

function Check(x) {
    if (x < 10) return (
        <div>
            <span> {x}</span>
            <div className="mt m1"></div>
            <div className="mb m1"></div>
        </div>

    )
    else {


        return (
            <div>
                <span>{Math.floor(x / 10)}</span>
                <span>{x % 10}</span>
                <div className="mt m1"></div>
                <div className="mb m1"></div>
            </div>
        )
    }
}


function Cell({inputShow='ok', isFocus, isFill, ...props}) {
    var i = 1;
    function Caro(props) {
        const inputShow = props.inputShow === undefined ? 'none' : props.inputShow;
        const isFill = props.isFill === undefined ? '' : props.isFill;
        return (
            <div className={"cell " + props.dark + ' ' + isFill } style={{ top: props.top, left: props.left }}>
                <div className={"input " + props.isFocus} style ={{display: inputShow}} >
                    <div className="__outer">
                        <div className="__inner">
                            {Check(i++)}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    let count_top = 0;
    let count_left = -50;
    const Cell = [];
    var key_cell = 0;
    for (let x = 0; x < 10; x++) {
        let not_dark = true;
        if (x % 2 == 0) not_dark = true;
        else not_dark = false;

        for (let y = 0; y < 10; y++) {
            if (not_dark == true) {
                Cell.push(<Caro key={'caro_' + key_cell++} dark='' top={count_top} left={count_left += 50} />)
                not_dark = false;
            }
            else {
                not_dark = true;
                Cell.push(<Caro key={'caro_' + key_cell++} dark='dark' top={count_top} left={count_left += 50} />)
            }
        }

        count_top += 50;;
        count_left = -50;

    }
    return (
        <div>
            {Cell}
        </div>
    )
}


