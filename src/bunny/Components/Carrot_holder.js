import React from 'react';



function Carrots_holder(props) {
    // return (
    //     <div className="carrots_holder" style= {{ display: props.trangthai}}>
    //         <div className="carrot" style={{ left: '0px' }}>
    //             <div className="carrot_img">
    //             </div>
    //         </div>
    //         <div className="carrot" style={{ left: '56px' }}>
    //             <div className="carrot_img">
    //             </div>
    //         </div>
    //         <div className="carrot" style={{ left: '112px' }}>
    //             <div className="carrot_img">
    //             </div>
    //         </div>
    //         <div className="carrot" style={{ left: '168px' }}>
    //             <div className="carrot_img">
    //             </div>
    //         </div>
    //     </div>



    // )
    const Holder = [];
    for (let i = 0; i < props.num2; ++i) {
        let k = (168 - 56 * i) ;
        Holder.push(
            <div key = {'holder_' + i} className="carrot" style={{ left: k + 'px' }}>
                <div className="carrot_img">
                </div>
            </div>
        )
    }

    return (
        <div className="carrots_holder" style={{ display: props.trangthai }}>
            {Holder}
        </div>
    )
}

export default Carrots_holder;



