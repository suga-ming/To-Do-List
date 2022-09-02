import React, { useState } from "react";

const Practice = (props) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const end = () => {
    alert("리액트 끝");
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  const showHide = () => {
    setShow(!show);
  };
  return (
    <div className="box">
      box{props.num}
      {props.name}
      <br />
      <button onClick={end} className="button">
        체크
      </button>
      <div>{count}</div>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={showHide}>hide</button>
      {show && `Counter: ${count}`}
    </div>
  );
};

export default Practice;
