import React, { useState, useEffect } from 'react';
import Bunny from './Bunny';
import Input from './Input';

export default function Table({ setisDone, win, road, mini, drop, finish }) {
	const [progress, setProgress] = useState(1);  // tiến độ trò chơi tính theo độ dài của mảng road	
	const upProgress = () => setProgress(progress + 1);
	const cells = [];
	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
			const num = x * 10 + y + 1; // số hiển thị tại ô đang đứng trên bảng
			const roadIdx = road.indexOf(num);  // chỉ số của road tại ô đang đứng
			const isRoad = roadIdx > -1 && roadIdx <= progress && 'road';  // tìm trong road xem ô đang đứng có trong mảng đường đi không 
			const isDark = (x + y) % 2 && 'dark';  // cài đặt vẽ màu xen kẽ trên bảng
			const isInput = road[progress] == num; // hiện thị input để nhập kết quả
			const isMini = (!mini.includes(num) || isInput) ? '' : 'mini';  // hiển thị carrot trên bảng
			const isBigmini = (isRoad && isMini) ? 'bigMini' : '';		// hiển thị carrot trên đường đi
			const isShow = (roadIdx > -1 && roadIdx <= progress) ? '' : 'hidden'; 	// hiển thị số khi đi qua
			cells.push(
				<div key={x * 10 + y}
					className={`table__cell table__cell--${isRoad} table__cell--${isDark}`}>
					{isInput ? <Input upProgress={upProgress} mini={mini} answer={num} drop={drop} /> :
						<span className={`table__cell__text ${isShow}`} >{num}</span>}
					<div className={`table__cell--${isMini} table__cell--${isBigmini} `} />
				</div>
			);
		}
	}
	const posEntrance = (road[0] - 1) * 5 - 12; // set pos entrance
	const posExit = road[road.length - 1] * 5 - 88; //set pos exit
	if (progress >= road.length) setisDone(true);  // Khi hoàn thành thì isDone = true
	return (
		<div className='table'>
			{cells}
			<Bunny mini={mini} win={win} isDone={progress >= road.length} end={finish} road={road} />
			<div className="entrance" style={{ top: posEntrance }} />
			<div className="exit" style={{ top: posExit }}>
				<div className="door" />
			</div>
		</div>
	);
}
