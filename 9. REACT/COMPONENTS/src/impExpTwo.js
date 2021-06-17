import React from "react";
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function div(a, b = 2) {
  return a / b;
}
function mul(a, b) {
  return a * b;
}

export { add, sub, div, mul };
