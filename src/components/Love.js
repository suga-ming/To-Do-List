import React, { useState } from "react";

export default function Love(props) {
  const [count, setCount] = useState(50);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="item">
      귀여운 {props.name}님
      <div className="buttons">
        <button className="crease" onClick={increase}>
          애정
        </button>
        <button className="crease" onClick={decrease}>
          식음
        </button>
      </div>
      {count}%
    </div>
  );
}
