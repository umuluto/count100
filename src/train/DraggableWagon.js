import React from 'react'
import { useDrag } from 'react-dnd'
import Types from './Types'
import Wagon from './Wagon'

function DraggableWagon(props) {
  const [, drag] = useDrag({
    item: { type: Types.WAGON },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        props.swapWagon(props.num);
      }
    },
  });

  return (
    <div ref={drag}>
      <Wagon {...props}/>
    </div>
  );
}

export default DraggableWagon;
