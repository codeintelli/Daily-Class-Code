import React from "react";
// import "./index.css";
function Challange3() {
  let curtime = new Date().getHours();
  let greeting = "";
  console.log(curtime);
  const greetingColor = {};
  const Design = {
    background: "#34495e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };
  const headingText = {
    padding: "20px 20px",
    background: "#2ecc71",
    borderRadius: "20px",
    color: "#bdc3c7",
  };
  if (curtime >= 1 && curtime < 12) {
    greeting = "Good Morning";
    greetingColor.color = "Green";
  } else if (curtime >= 12 && curtime < 20) {
    greeting = "Good Afternoon";
    greetingColor.color = "Orange";
  } else {
    greeting = "Good Night";
    greetingColor.color = "Yellow";
  }
  return (
    <>
      <div style={Design}>
        <h1 style={headingText}>
          Hello Sir, <span style={greetingColor}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default Challange3;
