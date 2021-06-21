import React from "react";
import { add, sub, mul, div } from "./Calc_logic";

function Calc() {
  return (
    <>
      <h1>The Addition Is {add(22, 22)}</h1>
      <h1>The Substraction Is {sub(44, 22)}</h1>
      <h1>The Multiplication Is {mul(2, 22)}</h1>
      <h1>The Division Is {div(22, 2)}</h1>
    </>
  );
}

export default Calc;
