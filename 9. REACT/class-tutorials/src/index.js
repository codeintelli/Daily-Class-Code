import React from "react";
import ReactDOM from "react-dom";
// external css
import "./index.css";
// let fname = "shiva";
// let lname = "bholenath";

// let arr = [1, 2, 3, 4, 5, 6, 7];

let curDate = new Date().toLocaleDateString();
let curTime = new Date().toLocaleTimeString();

// internal css
const pstyle = {
  marginTop: "30px",
  background: "green",
  color: "white",
};

ReactDOM.render(
  <>
    <h1 className="heading">Shiva</h1>
    <p style={pstyle}>{curDate}</p>
    {/* inline css */}
    <p style={{ fontSize: "50px" }}>{curTime}</p>
  </>,
  document.getElementById("root")
);
