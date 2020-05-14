import React from 'react'
import Holder from './Holder'

function Railway({wagonNum, lastWagon, highlight, finished}) {
  const holders = [<div key={0} className='holder holder--hidden'/>];
  while (holders.length <= wagonNum) {
    holders.push(<div key={holders.length} className={`holder holder--${finished}`}/>);
  }

  const ready = lastWagon >= wagonNum ? 'wrong' : highlight && 'highlight';

  if (holders.length < 6) {
    holders.push(<Holder key={holders.length} type={ready}/>);
  }

  while (holders.length < 6) {
    holders.push(<div key={holders.length} className='holder holder--dim'/>);
  }

  return (
    <div className='railway'>
      {holders}
    </div>
  );
}

export default Railway;
