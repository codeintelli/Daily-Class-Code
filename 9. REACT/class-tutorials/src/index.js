import React from "react";
import ReactDOM from "react-dom";
let fname = "shiva";
let lname = "mahadev";

ReactDOM.render(
  <>
    <h1>Shiva</h1>
    <p>Mahadev</p>
    <ol>{`my name is ${lname} ${fname}`}</ol>
    <ol>{2 + 3}</ol>
  </>,
  document.getElementById("root")
);
