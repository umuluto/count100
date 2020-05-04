import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Railway from './Railway'
import Wagon from './Wagon'
import './temp.css'

function App() {
  return (
    <div className='train-game'>
      <Railway />
      <Wagon />
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
