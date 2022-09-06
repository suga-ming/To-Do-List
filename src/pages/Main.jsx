import React, { useState } from "react";
// import "../pages/Main.css";
import "../App.css";
import List from "../components/List";
// import "../pages/Main.scss";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="title">To Do List</div>
        <div className="list-area">
          <input
            value={inputValue}
            type="text"
            className="input"
            placeholder="할 일을 입력해주세요."
            autoComplete="off"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button onClick={addItem} className="button">
            +
          </button>
        </div>

        <div className="list-item-area">
          <List todoList={todoList} />
        </div>
      </div>
    </div>
  );
};

export default Main;
