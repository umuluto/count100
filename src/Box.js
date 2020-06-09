import React, { useState } from 'react';
import Progress from './Progress';
import './box.css';

function Frills() {
	return (
		<>
			<div className="bg_cell"></div>
			<div className="bg_color_stuff"></div>
			<div className="bg_stuff"></div>
			<img className="bg_color" src="bg_color.jpg" />
		</>
	);
}

const Box = total => Component => props => {
	const [progress, setProgress] = useState(0);

	const win = () => {
		if (progress === total) {
			window.location.href = "winner.html";
		}
	}

	const success = () => {
		setProgress(progress + 1);
	};

	const fail = () => {
		if (progress > 0) {
			setProgress(progress - 1);
		}
	};

	return (
		<>
			<Frills />
			<div className='box'>
				<div className='box__head'>
					<a className='back' href='index.html'>
						<div className='back__arrow'/>
						<span>Back</span>
					</a>
					<Progress progress={progress} total={total} win={win} />
				</div>
				<div className='box__content'>
					<Component success={success}
						fail={fail}
						{...props}
					/>
				</div>
			</div>
		</>
	);
}

export default Box;
	