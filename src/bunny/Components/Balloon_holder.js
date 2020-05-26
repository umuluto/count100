import React from 'react'

export default Balloon_holder;

function Balloon_holder(props) {
    return(
    <div className="balloon_holder" style={{ display: props.status_Ballon }}>
        <div className="balloon_white" data-balloon="task" style={{ padding: '10px 15px' }}>Điền vào chỗ trống<br /> để tạo lên con đường<br /> trở về nhà của thỏ!</div>
    </div>
    )
}