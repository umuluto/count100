import React from "react";

function NumberInput(props) {
  return (
    <input
      id={`${props.field}-input`}
      className="ba"
      style={{ width: "44px" }}
      autoComplete="off"
    ></input>
  );
}

export default NumberInput;
