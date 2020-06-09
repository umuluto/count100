import React from 'react'

export default function Carrot_holder(props) {
    const holder = [];
    for (let i = 0; i < props.carrotHolder; ++i) {
        let k = (168 - 56 * i); // set vị trí hiển thị carrot trong holder, (set pos left) 
        holder.push(
            <div key={i} className="carrot" style={{ left: k + 'px' }} >
                <div className="carrot_img" />
            </div>
        )
    }
    return (
        <div className="carrots_holder" style={{ display: props.trangthai }}>
            {holder}
        </div>
    )
}