import React from "react";
import "../pages/Main.css";
import ListItems from "./ListItems";

function List(props) {
  return (
    <div className="list">
      {props.todoList.map((item) => (
        <ListItems item={item} />
      ))}
    </div>
  );
}

export default List;
