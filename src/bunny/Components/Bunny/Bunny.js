import React from 'react'

export default Bunny;
function Bunny(props){
    return(
    <div id={props.id_bunny} className={"bunny " + props.status_bunny +" " + props.with_carrot} style={{left: props.left_bunny , top: props.top_bunny , display: props.block_bunny}}>
    </div>
    )
}