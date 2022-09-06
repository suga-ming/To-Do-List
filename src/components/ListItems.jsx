import React from "react";

const ListItems = (props) => {
  const checked = (e) => {
    e.target.classList.toggle("change");
  };
  return (
    <div className="list-item">
      <div className="item" onClick={checked}>
        {props.item}
      </div>
    </div>
  );
};

export default ListItems;
