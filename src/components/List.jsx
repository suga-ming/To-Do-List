import React from "react";
import "../pages/Main.css";
import ListItem from "./ListItems";

function List(props) {
  console.log("List", props, ListItem);
  return (
    <div>
      {props.todoList.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
}

export default List;
