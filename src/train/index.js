import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Wagon from './Wagon'
import './temp.css'

function Railway({wagonNum = 1, wrong, highlight}) {
  const holders = [<div className='holder holder--hidden'/>];
  while (holders.length < wagonNum - 1) {
    holders.push(<div className='holder'/>);
  }

  if (wagonNum > 1) {
    holders.push(<div className={`holder holder--${wrong}`}/>);

    if (holders.length < 6) {
      holders.push(<div className={`holder holder--${highlight}`}/>);
    }
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

function init() {
  const res = [];

  for (let i = 0; i < 5; ++i) {
    res.push({
      num: i,
      pos: {x: i*150, y: 130},
    });
  }

  return res;
}

function getDest() {
  const res = [];

  for (let i = 0; i < 5; ++i) {
    res.push({
      pos: {x: 221 + i*125, y: 285},
    });
  }

  return res;
}

function App() {
  const [wagons, setWagons] = useState(init());

  function syncPos(num, pos) {
    setWagons(wagons.map(w => w.num === num ? {...w, pos} : w));
  }

  function reset() {
    setWagons(init());
  }

  function cheat() {
    const dest = getDest();
    setWagons(wagons.map((w, i) => ({...w, ...dest[i]})));
  }

	return (
    <div className='train-game'>
      <Railway/>
      {wagons.map(w => <Wagon syncPos={syncPos} {...w}/>)}
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => cheat()}>Cheat</button>
    </div>
	);
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
