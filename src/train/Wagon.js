import React from 'react'
import Draggable from 'react-draggable'

function Wagon(props) {
  function onStop(e, data) {
    const {x, y} = data;
    props.syncPos(props.num, {x, y});
  }

  return (
    <Draggable
      bounds={'parent'}
      position={props.pos}
      onStop={onStop}>
      <div className={`wagon wagon--${props.type}`}>
        <div className={`wagon__num wagon__num--${props.type}`}>
          {props.num}
        </div>
      </div>
    </Draggable>
  );
}

export default Wagon;
