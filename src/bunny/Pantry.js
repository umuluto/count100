import React from 'react';

export default function Pantry({count = 0}) {
    const carrots = [];

    for (let i = 0; i < 10; ++i) {
        const filled = i < count ? 'filled' : undefined;
        carrots.push(<div key={i} className={`pantry__carrot pantry__carrot--${filled}`}/>);
    }
    
    return (
        <div className='pantry'>
            <p className='pantry__text'>Nhà của thỏ</p>
            {carrots}
        </div>
    );
}