import React from "react";
import Like_gs_item from "./Like_gs_item";

export default function Like_gs(props) {
  return (
    <div>
      {props.gsLikeItem.map((item) => (
        <Like_gs_item item={item} />
      ))}
    </div>
  );
}
