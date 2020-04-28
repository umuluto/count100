import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Wagon from './Wagon'
import Railway from './Railway'
import './temp.css'

function init() {
  const wagons = [6, 5, 4, 3, 2, 1].map(n => ({ num: n }));
  wagons[0].type = 'engine';
  wagons[0].inplace = true;
  return wagons;
}

function App() {
  const [wagons, setWagons] = useState(init());

  function swapWagon(num) {
    setWagons(wagons.map(w => w.num == num ? {...w, inplace: !w.inplace} : w));
  }

  function test() { swapWagon(1); }
  function empty() {
    const [head, ...tail] = wagons;
    setWagons([head, ...tail.map(w => ({...w, inplace: false}))]);
  }

  return (
    <DndProvider backend={Backend}>
      <div className='train-game'>
        <Railway wagons={wagons}/>
        {wagons.filter(w => !w.inplace).map(w =>
          <Wagon swapWagon={swapWagon} {...w}/>
        ).reverse()}
      </div>
      <button onClick={empty}>Empty</button>
    </DndProvider>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
