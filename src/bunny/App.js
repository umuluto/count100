import React, {useState} from 'react';
import Pantry from './Components/Pantry.js';
import './main2.css';
import Carrot_holder from './Components/Carrot_holder'
import Bunny from './Components/Bunny/Bunny'
import Table_wrapper from './Components/Field_wrapper/Table_wrapper'
import Cell from './Components/Field_wrapper/Cell'
import Balloon_holder from './Components/Balloon_holder'
function App() {
  
  const [carrot_empty,setCarrotEmpty] = useState(5)
  return (
    <div id="board" className="App" style={{}}>
      <div className="all_wrapper" style={{ width: '1536px' }}>
        <div className="scene_wrapper">
          <Pantry num ={carrot_empty} />
          <div className="trees_0"> </div>
          <div className="trees_1" > </div>
          <a href="index.html" className="card_back">
            Quay lại
            <div className="pointer" />
          </a>
          <Carrot_holder trangthai = "block" />
          <Bunny id= "bunnt_1"  status_bunny = "go_down" left_bunny ="127px" top_bunny ="19px" block_bunny = "block"  />
          <Cell />
          <Balloon_holder status_balloon = "block"/>
        </div>

    

      </div></div>
  )
}

export default App;
