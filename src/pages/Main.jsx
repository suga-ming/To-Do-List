import React from "react";
// import "../pages/Main.css";
import "../pages/Main.scss";

const Main = () => {
  // const pass = () => {

  // }

  return (
    <div className="container">
      <div className="content">
        <div className="title">To Do List</div>
        <div className="list-area">
          <input
            type="text"
            className="list"
            placeholder="할 일을 입력해주세요."
            autoComplete="off"
          ></input>
          <button onClick={pass} className="button">
            +
          </button>
        </div>
        <div className="list-item-area">
          <div className="list-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
