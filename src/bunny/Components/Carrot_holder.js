import React from 'react';



function Carrots_holder(props) {
    return (
        <div className="carrots_holder" style= {{ display: props.trangthai}}>
            <div className="carrot" style={{ left: '0px' }}>
                <div className="carrot_img">
                </div>
            </div>
            <div className="carrot" style={{ left: '56px' }}>
                <div className="carrot_img">
                </div>
            </div>
            <div className="carrot" style={{ left: '112px' }}>
                <div className="carrot_img">
                </div>
            </div>
            <div className="carrot" style={{ left: '168px' }}>
                <div className="carrot_img">
                </div>
            </div>
        </div>
    )
}

export default Carrots_holder;