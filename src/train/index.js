import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Railway from './Railway';
import Engine from './Engine';
import Wagon from './Wagon';
import { target, init} from './levels.js';
import './train.css';

function App() {
  const [initial, ] = useState(init);
  const [state, setState] = useState({
    wagonNum: 0,
    lastWagon: -1,
  });
  const [highlight, hilite] = useState(false);

  const push = idx => {
    let offset;
    setState(st => {
      offset = idx === st.wagonNum ? 1 : 0
      return {
        wagonNum: st.wagonNum + offset,
        lastWagon: idx,
      }
    })
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
    <div className='train-game'>
      <Railway highlight={highlight} finished={finished} {...state}/>
      <Engine num={initial.loco} finished={finished}/>
      {wagons}
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
