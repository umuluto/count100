import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pantry from './Pantry';
import Table from './Table';
import Bunny from './Bunny'
import './temp.css';

function App() {
    const [game, setGame] = useState(1); // set màn chơi
    const [isDone, setisDone] = useState(false); // đã hoàn thành màn chơi chưa


    return (
        <div className='board' >
            <div className="all_wrapper" style={{ width: '1536px' }}>
                <div className="scene_wrapper">
                    <Table game={game} isDone={isDone} setisDone={setisDone} />

                    <div className='tree1' />
                    <div className='tree2' />
                    
                    <Pantry />
                    <Bunny game={game} isDone={isDone} setisDone={setisDone} setGame={setGame} />
                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById('root')
ReactDOM.render(< App />, rootElement)