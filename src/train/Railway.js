import React from 'react'
import Holder from './Holder'

function Railway({wagonNum, lastWagon, highlight, finished}) {
  const holders = [<div className='holder holder--hidden'/>];
  while (holders.length <= wagonNum) {
    holders.push(<div className={`holder holder--${finished}`}/>);
  }

  const ready = lastWagon >= wagonNum ? 'wrong' : highlight && 'highlight';

  if (holders.length < 6) {
    holders.push(<Holder type={ready}/>);
  }

  while (holders.length < 6) {
    holders.push(<div className='holder holder--dim'/>);
  }

  return (
    <div className='railway'>
      {holders}
    </div>
  );
}

export default Railway;
