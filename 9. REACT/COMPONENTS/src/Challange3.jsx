import React from "react";

// const curtime = new Date("July 21, 1983 15:15:00").getHours();
const curtime = new Date().getHours();
console.log(curtime);
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
const greetingColor = {};

let greeting;

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

function Challange() {
  return (
    <>
      <div style={Design}>
        <h1 style={headingText}>
          Hello Sir,<span style={greetingColor}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default Challange;
