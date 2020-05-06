import React from "react";
function Pantry(props) {
    
    const Pantry = [];
    for (let i = 0; i < 10; ++i) {
      if(i<props.num) Pantry.push(<div key={i} className="carrot_bead filled" />);
      else Pantry.push(<div key={i} className="carrot_bead empty" />);
    }
    return (
        <div className="pantry">
            <span className="text">Nhà của thỏ</span>
            <div className='carrots'>
                {Pantry}
            </div>
      </div>
    )
    
}
export default Pantry;