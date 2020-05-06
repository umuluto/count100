import React from 'react'
export default Cell;




function Cell() {
    var i = 1;
    function Caro(props) {
        return (
            <div className={"cell " + props.dark} style={{ top: props.top, left: props.left }}>
                <div className="input blank" style={{ display: 'block' }}>
                    <div className="__outer">
                        <div className="__inner">
                            <span>{i++}</span>
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
                Cell.push(<Caro key ={key_cell++} top={count_top} left={count_left += 50} />)
                not_dark = false;
            }
            else {
                not_dark = true;
                Cell.push(<Caro key ={key_cell++} dark='dark' top={count_top} left={count_left += 50} />)
            }
        }
        
        count_top += 50;;
        count_left = -50;

    }
    

    return (
        <div className="field_wrapper" style={{ display: 'block' }}>
            <div className='table_wrapper'>
                {Cell}
            </div>
            <div className="entrance" style={{ top: '88px', display: 'none' }} />
            <div className="exit" style={{ top: '262px' }}>
                <div className="door" />
            </div>
        </div>
    )
}
