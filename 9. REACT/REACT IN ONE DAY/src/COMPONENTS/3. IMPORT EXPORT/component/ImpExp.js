import React from "react";
import BackEnd, { name, names } from "./impExpDemo";
function Imp() {
  return (
    <>
      <ul>
        <li>{BackEnd}</li>
        <li>{name()}</li>
        <li>{names()}</li>
      </ul>
    </>
  );
}
export default Imp;
