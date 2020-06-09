import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

const snapRange = 50;
const topLimit = 200;

function Wagon(props) {
	// vị trí toa tàu
  const [pos, setPos] = useState(props.pos);
	// toa tàu có hoạt cảnh tự trượt vào ô hay không
  const [snap, setSnap] = useState(null);
	// style của toa tàu
  const [style, setStyle] = useState(null);

	// nếu vị trí toa tàu từ props thay đổi thì thay đổi theo
	useEffect(() => {
		if (props.pos !== pos) {
			setPos(props.pos);
		}
	}, [props.pos]);

  const _inrange = (x, y) => Math.abs(x - props.target.x) < snapRange &&
    Math.abs(y - props.target.y) < snapRange;

  const onMouseDown = () => setSnap(null);

	// tô sáng ô khi toa ở gần
  const onDrag = (e, {x, y}) => {
    props.hilite(_inrange(x, y));
  }


  const onStop = (e, {x, y}) => {
		// nếu trong tầm thì xếp toa vào
    if (_inrange(x, y)) {
			// nếu xếp sai đưa toa về vị trí cũ
      if (!props.push(props.idx)) {
        setTimeout(setPos, 1000, props.pos);
      }
      setStyle({zIndex: 6 - props.idx});
      setSnap('snap');
      ({x, y} = props.target);
    } else if (y > topLimit) {
			// nếu toa quá thấp thì đẩy toa lên
      y = topLimit;
      setSnap('snap');
    }

		props.hilite(false);
    setPos(pos => ({x, y}));
  }

  return (
    <Draggable
      bounds='parent'
      position={pos}
      onMouseDown={onMouseDown}
      onDrag={onDrag}
      onStop={onStop}
    >
      <div className={`wagon wagon--${snap} wagon--${props.finished}`}
        style={style}
      >
        <div className='wagon__num'>
          {props.num}
        </div>
      </div>
    </Draggable>
  );
}

export default Wagon;
