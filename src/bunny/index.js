import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Pantry from './Pantry';
import Holder from './Holder'
import Table from './Table';
import Balloon_holder from './Balloon_holder';
import './temp.css';

const arr_roads = [
    [21, 22, 23, 33, 34, 35, 36, 46, 56, 57, 58, 59, 69, 70],
    [61, 62, 52, 42, 43, 44, 45, 46, 56, 66, 76, 77, 78, 68, 69, 59, 60],
    [81, 82, 83, 84, 74, 64, 54, 44, 45, 46, 47, 37, 27, 28, 29, 30],
    [31, 32, 33, 43, 44, 45, 46, 47, 48, 58, 68, 69, 79, 89, 99, 100],
    [11, 12, 2, 3, 4, 5, 15, 25, 35, 36, 37, 27, 17, 18, 19, 9, 10],
    [81, 82, 83, 73, 74, 75, 76, 77, 67, 57, 58, 48, 49, 39, 29, 30],
    [21, 22, 23, 33, 43, 44, 45, 35, 25, 15, 16, 17, 18, 28, 38, 48, 58, 59, 60],
    [71, 72, 62, 52, 53, 54, 55, 65, 66, 67, 57, 47, 37, 38, 39, 40],
];

function Frills() {
    return (
        <>
            <div className='tree1' />
            <div className='tree2' />
            <a href="index.html" className="card_back">
                Quay lại
		        <div className="pointer" />
            </a>
        </>
    );
}


function App() {
    const [game, setGame] = useState(0); // set màn chơi
    const [key, setKey] = useState(0);
    const [carrotPantry, setcarrotPantry] = useState(0); // số carrot ở nhà
    const [carrotHolder, setcarrotHolder] = useState(4); // số carrot trong holder

    const over = () => {
        setKey(key + 1);
        setcarrotPantry(0);
        setcarrotHolder(4);
    };

    const drop = () => {
        setcarrotHolder(carrotHolder - 1);
    };

    if (carrotHolder <= 0) over();

    const finish = () => {
        setGame(game + 1);
        setKey(key + 1);
        setcarrotPantry(0);
        setcarrotHolder(4);
    };

    return (
        <>
            <div className='board' >
                <div className="all_wrapper">
                    <div className="scene_wrapper">
                        <Table key={key}
                            road={arr_roads[game]}
                            drop={drop}
                            finish={finish}
                        />
                        <Frills />
                        <Balloon_holder />
                        <Pantry carrotPantry={carrotPantry} />
                        <Holder carrotHolder={carrotHolder} />
                    </div>
                </div>
            </div>
        </>
    );
}

const rootElement = document.getElementById('root')
ReactDOM.render(< App />, rootElement)
