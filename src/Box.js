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
	const [key, setKey] = useState(0);

	const success = () => {
		setProgress(progress + 1);
		setKey(key + 1);
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
					<Progress progress={progress} total={total} />
				</div>
				<div className='box__content'>
					<Component success={success}
						fail={fail}
						key={key}
						{...props}
					/>
				</div>
			</div>
		</>
	);
}

export default Box;
