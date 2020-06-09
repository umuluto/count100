import React, { useState } from 'react'

export default Balloon_holder;

function Balloon_holder(props) {
    const [state, setState] = useState({ opacity: 1, id: setTimeout(() => setState({ opacity: 0, id: null }), 3000) });
    // delay 3s sau đó tắt bảng chỉ dẫn
    return (
        <div className='balloon_holder' style={{ opacity: state.opacity }}  >
            <div className="balloon_white" style={{ padding: '10px 15px' }}>Điền vào chỗ trống<br /> để tạo lên con đường<br /> trở về nhà của thỏ!</div>
        </div>
    )
}