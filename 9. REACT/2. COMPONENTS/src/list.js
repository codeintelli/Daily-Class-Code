import React from "react";

function List(props) {
  return (
    <>
      <ul>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
        <li>{props.five}</li>
      </ul>
    </>
  );
}

export default List;
