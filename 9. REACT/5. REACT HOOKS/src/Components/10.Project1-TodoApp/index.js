import React from "react";
import Todo from "./todo";
const Index = () => {
  const [inputList, setInputList] = React.useState("");
  const [Items, setItems] = React.useState([]);
  // todo:  const [initialvalue,function] = React.useState(currentvalue);
  // * useState is a hook(function based approch) that allows you to have state variable in function component. you pass the initial state to the function and it return a variable with current state value (not necessarily the initial state) and another function to update this value
  // !1. solve input value error[we can solve this error in localstorage project]
  // !2. add notes on key press

  // insert items
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  // read items
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  
  // delete items
  const deleteItems = (id) => {
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main__div">
        <div className="center__div">
          <h1>Todo List</h1>
          <input type="text" placeholder="Add a Items" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ul>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, i) => {
              return <Todo text={itemval} id={i} onSelect={deleteItems} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
