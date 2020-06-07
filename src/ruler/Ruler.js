import React from 'react'

function Ruler() {
    const element_1 = [ 'mm fst even',
                        'mm ',
                        'mm',
                        'mm',
                        'mm',
    ];
    const element_2 = [ 'mm fst odd',
                        'mm',
                        'mm',
                        'mm',
                        'mm',
    ];
    const component_1 = [];
    const component_2 = [];
    for (const [index,value] of element_1.entries()){
        component_1.push(<div className={value} key={index}></div>)
    }
    for (const [index,value] of element_2.entries()){
        component_2.push(<div className={value} key={index}></div>)
    }
    return(
        <div className="">
            <div className="a_border a_start">
                <span>0</span>
            </div>
            <div className="a_border a_end">
                <span>100</span>
            </div>
            <div key="50" className="number_center">
                <span>50</span>
            </div>
            <div className="cover">
                {component_1}{component_2}{component_1}{component_2}
                {component_1}{component_2}{component_1}{component_2}
                {component_1}{component_2}{component_1}{component_2}
                {component_1}{component_2}{component_1}{component_2}
                {component_1}{component_2}{component_1}{component_2}
            </div>
            
        </div>
    )
}
export default Ruler;