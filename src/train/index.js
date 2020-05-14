import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Railway from './Railway'
import Engine from './Engine'
import Wagon from './Wagon'
import './temp.css'

function init() {
  const initial = [];
  for (let i = 0; i < 5; ++i) {
    initial.push({
      num: 4- i,
      pos: {x: i*140, y: 100}
    });
  }
  return initial;
}

const target = [];
for (let i = 0; i < 5; ++i) {
  target.push({x: 230 + 125*i, y: 285});
}
target.push({});

const dest = [];
for (let i = 0; i < 5; ++i) {
  dest.push({x:221 + i*125, y: 285});
}


function App() {
  const [initial, ] = useState(init());
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
  const wagons = initial.map((w, idx) => {
    return (
      <Wagon key={idx}
        idx={idx}
        push={push}
        hilite={hilite}
        target={target[state.wagonNum]}
        dest={dest[state.wagonNum]}
        finished={finished}
        {...w} />
    );
  })

  return (
    <div className='train-game'>
      <Railway highlight={highlight} finished={finished} {...state}/>
      <Engine num={5} finished={finished}/>
      {wagons}
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
