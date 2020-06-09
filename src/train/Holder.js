import React from 'react'

function Holder(props) {
	// chỉ hiển thị gợi ý khi đặt sai vị trí
  const hinted = props.type == 'wrong' ? null : {display: 'none'};
  return (
    <div className={`holder holder--${props.type}`}>
      <div className='hint' style={hinted}>
        <div className='hint__corner'>
          <div className='hint__corner__inner'/>
        </div>
        <div className='hint__content'>
          Oops! Wrong cart!
        </div>
      </div>
      <div className='holder__glow' style={hinted}/>
    </div>
  );
}

export default Holder;
