import React, { useState } from "react";
import Like_by from "./Like_by";
import Like_gs from "./Like_gs";

export default function Love_Input() {
  const [byInputValue, setByInputValue] = useState("");
  const [byLikeItem, setByLikeItem] = useState([]);
  const [gsInputValue, setGsInputValue] = useState("");
  const [gsLikeItem, setGsLikeItem] = useState([]);
  const addByLike = () => {
    setByLikeItem([...byLikeItem, byInputValue]);
    setByInputValue("");
  };
  const addGsLike = () => {
    setGsLikeItem([...gsLikeItem, gsInputValue]);
    setGsInputValue("");
  };
  return (
    <div>
      <div className="inputs">
        <div className="input">
          <input
            value={byInputValue}
            type="text"
            placeholder=" 보영이 좋은점 적기"
            onChange={(e) => {
              setByInputValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              addByLike();
            }}
            className="plus"
          >
            +
          </button>
        </div>
        <div className="input">
          <input
            value={gsInputValue}
            type="text"
            placeholder=" 광수 좋은점 적기"
            onChange={(e) => {
              setGsInputValue(e.target.value);
            }}
          ></input>
          <button onClick={addGsLike} className="plus">
            +
          </button>
        </div>
      </div>
      <div className="Like-area">
        <div className="Like-list">
          <Like_by byLikeItem={byLikeItem} />
        </div>
        <div className="Like-list">
          <Like_gs gsLikeItem={gsLikeItem} />
        </div>
      </div>
    </div>
  );
}
