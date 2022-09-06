import React from "react";
import Like_by_item from "./Like_by_item";

export default function Like_by(props) {
  return (
    <div className="Like-list">
      <div className="Like-item">
        {props.byLikeItem.map((item) => (
          <Like_by_item item={item} />
        ))}
      </div>
    </div>
  );
}
