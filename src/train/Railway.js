import React from 'react'

function Railway({wagonNum = 1, wrong, highlight = 'dim'}) {
  const holders = [<div className='holder holder--hidden'/>];
  while (holders.length < wagonNum - 1) {
    holders.push(<div className='holder'/>);
  }

  if (wagonNum > 1) {
    holders.push(<div className={`holder holder--${wrong}`}/>);
  }

  if (holders.length < 6) {
    holders.push(<div className={`holder holder--${highlight}`}/>);
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
