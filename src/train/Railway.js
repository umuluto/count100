import React from 'react'
import Holder from './Holder'
import Wagon from './Wagon'

function Railway(props) {
  const wagons = props.wagons.filter(w => w.inplace);
  if (wagons[wagons.length - 1].wrong !== true && wagons.length < 6) {
    wagons.push({droppable: true});
  }

  while (wagons.length < 6) {
    wagons.push({type: 'dim'});
  }

  return (
    <div className='railway'>
    {wagons.map(w =>
      <Holder type={w.type} droppable={w.droppable} key={w.num}>
        {w.num && <Wagon {...w}/>}
      </Holder>
    )}
    </div>
  );
}

export default Railway;
