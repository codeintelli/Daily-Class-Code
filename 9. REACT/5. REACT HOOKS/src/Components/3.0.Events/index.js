import React from "react";

const Event = () => {
  let CustomBackground = "#ffffff";
  const name = "Click Me";
  //   SPECIALLY FOR BACKGROUND PURPOSE

//   USESTATE SYNTAX CONST[CUURENT_VALUE,FUNCTION] = USESTATE(INITIALVALUE)
  const [cBg, setcBG] = React.useState(CustomBackground);

  //   SPECIALLY FOR NAME PURPOSE
  const [cname, setcname] = React.useState(name);
  const singleClick = () => {
    console.log("you click me");
    setcBG("#9559b6");
    setcname("🤩🤩YOu CLick Me");
  };
  const doubleClick = () => {
    console.log("you double click me");
    setcBG("#955926");
    setcname("🙂🙂YOu Hit Me");
  };

  return (
    <>
      <div style={{ backgroundColor: cBg }} onClick={singleClick}>
        <button onClick={singleClick} onDoubleClick={doubleClick}>
          {cname}
        </button>
      </div>
    </>
  );
};

export default Event;
