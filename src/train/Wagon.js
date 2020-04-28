import React from 'react'
import { useDrag } from 'react-dnd'
import Types from './Types'

function Wagon(props) {
  const [, drag] = useDrag({
    item: { type: Types.WAGON },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        props.swapWagon(props.num);
      }
    },
    canDrag: (monitor) => !props.inplace,
  });

  return (
    <div ref={drag} className={`wagon wagon--${props.type} wagon--${props.inplace && 'inplace'}`}>
      <div className={`wagon__num wagon__num--${props.type}`}>
        {props.num}
      </div>
    </div>
  );
}

export default Wagon;
