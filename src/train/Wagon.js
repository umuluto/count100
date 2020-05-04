import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Wagon(props) {
  const [pos, setPos] = useState({x: 0, y: 0});
  const [snap, setSnap] = useState(null);

  const oMD = () => setSnap(null);

  const onStop = (e, data) => {
    let {x, y} = data;

    if (y > 200) {
      y = 200;
      setSnap('snap');
    }

    setPos(pos => ({x, y}));
  }

  return (
    <Draggable
      bounds='parent'
      position={pos}
      onMouseDown={oMD}
      onStop={onStop}
    >
      <div className={`wagon wagon--${props.type} wagon--${snap}`}>
        <div className={`wagon__num wagon__num--${props.type}`}>
          {props.num}
        </div>
      </div>
    </Draggable>
  );
}

export default Wagon;
