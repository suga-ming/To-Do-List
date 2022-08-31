// import React from "react";

const Practice = (props) => {
  const end = () => {
    alert("리액트 끝");
  };
  return (
    <div className="box">
      box{props.num}
      {props.name}
      <br />
      <button onClick={end} className="button">
        체크
      </button>
    </div>
  );
};

export default Practice;
