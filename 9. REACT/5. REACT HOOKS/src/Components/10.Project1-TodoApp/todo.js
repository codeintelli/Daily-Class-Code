import React from "react";

const todo = (props) => {
    
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times-circle"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li key={props.id}>{props.text}</li>
      </div>
    </>
  );
};

export default todo;
