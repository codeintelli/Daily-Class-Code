import React from "react";
import "./slotmachine.css";
const SlotM = (props) => {
  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot__inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot__inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Not Matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

const SlotMachine = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 🎰 Welcome To
        <span style={{ fontWeight: "bold", color: "#000" }}>
          Slot Machine Game
        </span>
        🎰 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😀" y="😀" z="😀" />
        <SlotM x="😀" y="🙂" z="😀" />
        <SlotM x="🥰" y="🤗" z="😀" />
      </div>
    </>
  );
};






export default SlotMachine;
