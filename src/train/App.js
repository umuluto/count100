import React, { useState, useEffect } from 'react';
import Railway from './Railway';
import Engine from './Engine';
import Wagon from './Wagon';
import Box from '../Box';
import { target, init} from './levels.js';
import './train.css';

function App({ success, fail }) {
	// trạng thái các toa tàu
  const [initial, setInitial] = useState(init);
	// số toa đã xếp đúng và chỉ số toa cuối vừa xếp
  const [state, setState] = useState({
    wagonNum: 0,
    lastWagon: -1,
  });
	// có tô sáng ô ngay sau toa cuối hay không
  const [highlight, hilite] = useState(false);

	// khởi tạo lại trạng thái khi hết màn
	const complete = () => {
		success();
		setInitial(init());
		setState({
			wagonNum: 0,
			lastWagon: -1,
		});
		hilite(false);
	};

	// thử xếp 1 toa vào trả về thành công hay không
  const push = idx => {
    let offset;
    setState(st => {
      offset = idx === st.wagonNum ? 1 : 0
      return {
        wagonNum: st.wagonNum + offset,
        lastWagon: idx,
      }
    });

		if (offset === 0) fail();

    return offset > 0;
  };

  const finished = state.wagonNum === 5 ? 'finished' : null;
  const wagons = initial.wagons.map(([num, pos], idx) => {
    return (
      <Wagon key={idx}
        idx={idx}
        push={push}
        hilite={hilite}
        target={target[state.wagonNum]}
        finished={finished}
        num={num}
				pos={pos} />
    );
  })

  return (
		<>
		<p className='instruction'>Place the carts in increasing or decreasing order</p>
    <div className='train-game'>
      <Railway highlight={highlight} finished={finished} {...state}/>
      <Engine num={initial.loco} finished={finished} end={complete}/>
      {wagons}
    </div>
		</>
  );
}

export default Box(3)(App);
