import React from 'react'
import Holder from './Holder'

function Railway({wagonNum, lastWagon, highlight, finished}) {
	// ô đầu tiên không hiển thị là ô cứa đầu tàu
  const holders = [<div key={0} className='holder holder--hidden'/>];
	// các ô chứa toa tàu có màu tím
  while (holders.length <= wagonNum) {
    holders.push(<div key={holders.length} className={`holder holder--${finished}`}/>);
  }

	// ô chứa toa sai hoặc ô ngay sau toa cuối có style riêng
  const ready = lastWagon >= wagonNum ? 'wrong' : highlight && 'highlight';

  if (holders.length < 6) {
    holders.push(<Holder key={holders.length} type={ready}/>);
  }

	// các ô còn lại bị làm mờ đi
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
