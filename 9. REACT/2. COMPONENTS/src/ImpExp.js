import react from "react";
import { add, sub, div, mul } from "./impExpTwo";
function ImpExp() {
  return (
    <>
      <ul>
        <li>Addition is {add(22, 22)} </li>
        <li>div is {div(66)} </li>
        <li>sub is {sub(2, 22)} </li>
        <li>mul is {mul(2, 22)} </li>
      </ul>
      {/* <Nitin /> */}
    </>
  );
}
export default ImpExp;
