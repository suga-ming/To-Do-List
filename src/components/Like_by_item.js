import React from "react";

export default function Like_by_item(props) {
  return (
    <div className="by-item-area">
      <div className="by-item">{props.item}</div>
    </div>
  );
}
