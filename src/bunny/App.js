import React, { useState } from 'react';
import Pantry from './Components/Pantry';
import './test.css';
import './main2.js';
import Carrot_holder from './Components/Carrot_holder'
import Bunny from './Components/Bunny'

import Cell from './Components/Cell'
import Balloon_holder from './Components/Balloon_holder'

function App() {
  const [carrotEmpty, setCarrotEmpty] = useState(0)
  const [carrotHolder, setCarrotHolder] = useState(3)
  const [inputStatus, setInputStatus] = useState('blank')
  return (
    <div id="board" className="App" style={{}}>
      <div className="all_wrapper" style={{ width: '1536px' }}>
        <div className="scene_wrapper">
          <Pantry num={carrotEmpty} />
          <div className="trees_0"> </div>
          <div className="trees_1" > </div>
          <a href="index.html" className="card_back">
            Quay lại
            <div className="pointer" />
          </a>
          <Carrot_holder trangthai="none" num2={carrotHolder} />
          <Bunny id="bunnt_1" status_bunny="go_down" left_bunny="127px" top_bunny="19px" block_bunny="none" />
          <div className="field_wrapper" style={{ display: 'block' }}>
            <div className='table_wrapper'>
              <Cell />
            </div>
            <div className="entrance" style={{ top: '88px', display: 'none' }} />
            <div className="exit" style={{ top: '262px' }}>
              <div className="door" />
            </div>
          </div>
          <Balloon_holder status_balloon="block" />
        </div>
      </div></div>
  )
}

export default App;
