import React from 'react'
import { useDrop } from 'react-dnd'
import Types from './Types'

function Holder(props) {
  const [, drop] = useDrop({
    accept: Types.WAGON,
    canDrop: (monitor) => props.droppable,
  });

  return (
    <div ref={drop} className={`holder holder--${props.type}`}>
      <div className='holder__empty'>
        {props.children}
      </div>
    </div>
  );
}

export default Holder;
