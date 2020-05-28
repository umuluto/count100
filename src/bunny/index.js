import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Pantry from './Pantry';
import Holder from './Holder'
import Table from './Table';
import Bunny from './Bunny';
import Input from './Input';
import './temp.css';
import Balloon_holder from './Balloon_holder';

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

function App() {
    const [game, setGame] = useState(1); // set màn chơi
    const [isDone, setisDone] = useState(false); // đã hoàn thành màn chơi chưa
    const [progress, setProgress] = useState(1); //set tiến độ
    const upProgress = () => setProgress(progress + 1);
    const [carrotPantry, setcarrotPantry] = useState(0); // số carrot ở nhà
    const [carrotHolder, setcarrotHolder] = useState(4); // số carrot trong holder

    const end = () => {
        setGame(game + 1);
        setisDone(false);
        setProgress(1);
        setcarrotPantry(carrotPantry + carrotHolder);
    }

    function Table(props) {

        let roads = arr_roads[game - 1]; // set con đường của màn chơi

        let posEntrance = (roads[0] - 1) * 5 - 12; // set pos entrance

        let posDoor = roads[roads.length - 1] * 5 - 88;

        const cells = [];

        useEffect(() => {
            if (progress == (roads.length)) // đến đích
            {
                setisDone(true);   // set trạng thái hoàn thành màn chơi
                // setProgress(1);
                setProgress(progress - 1); // ngăn progress tăng thêm
            }
        }, [progress]);

        for (let x = 0; x < 10; x++)
            for (let y = 0; y < 10; y++) {
                const num = x * 10 + y + 1;
                let isRoad = '';
                for (let x = 0; x <= progress; x++)  // bôi vàng những câu trả lời đúng
                {
                    if (roads[x] == num) isRoad = 'road';
                }

                const isDark = (x + y) % 2 ? 'dark' : ''; // Cài đặt hiển thị đậm nhạt xen kẽ của bảng

                const isInput = (roads[progress] == num && isDone == false);  // cài đặt hiển thị ô nhập đáp án

                cells.push(
                    <div key={x * 10 + y} className={`table__cell table__cell--${isRoad} table__cell--${isDark}`}>
                        {isInput ? <Input upProgress={upProgress} answer={num} carrotHolder={carrotHolder} setcarrotHolder={setcarrotHolder} /> : <span className='table__cell__text' >{num}</span>}
                    </div>);
            }

        return (
            <div className='table'>
                {props.children}
                {cells}
                <div className="entrance" style={{ top: posEntrance, display: 'block' }} />
                <div className="exit" style={{ top: posDoor }}>
                    <div className="door" />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='board' >
                <div className="all_wrapper" style={{ width: '1536px' }}>
                    <div className="scene_wrapper">
                        <Table game={game} isDone={isDone} setisDone={setisDone}>
                            <Bunny game={game} isDone={isDone} end={end} />
                        </Table>
                        <div className='tree1' />
                        <div className='tree2' />
                        <a href="index.html" className="card_back">
                            Quay lại
                        <div className="pointer" />
                        </a>
                        <Pantry carrotPantry={carrotPantry} />

                        <Balloon_holder />
                        <Holder carrotHolder={carrotHolder} />
                    </div>
                </div>
            </div>
            <button onClick={()=>{setisDone(true)}}>CHEAT!!!</button>
        </>
    );
}

const rootElement = document.getElementById('root')
ReactDOM.render(< App />, rootElement)