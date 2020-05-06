import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Wagon(props) {
  const [pos, setPos] = useState(props.pos);
  const [snap, setSnap] = useState(null);
  const [style, setStyle] = useState(null);

  const _inrange = (x, y) => Math.abs(x - props.target.x) < 50 &&
    Math.abs(y - props.target.y) < 50;

  const oMD = () => setSnap(null);

  const onDrag = (e, {x, y}) => {
    props.hilite(_inrange(x, y));
  }

  const onStop = (e, {x, y}) => {
    if (_inrange(x, y)) {
      if (!props.push(props.idx)) {
        setTimeout(setPos, 1000, props.pos);
      }
      setStyle({zIndex: props.num + 6});
      ({x, y} = props.dest);
      setSnap('snap');
    } else if (y > 200) {
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
      onDrag={onDrag}
      onStop={onStop}
    >
      <div className={`wagon wagon--${props.type} wagon--${snap}`} style={style}>
        <div className={`wagon__num wagon__num--${props.type}`}>
          {props.num}
        </div>
      </div>
    </Draggable>
  );
}

export default Wagon;
