import React, { useState } from "react";

// let count = 1[ initial value];
// const Incr = () => {
//   count++;[function] 
//   console.log("clicked", count);
//   document.getElementById("demo").innerHTML = count[current value];
// };
const Index = () => {
  //   const state = useState(); //import the hooks
  //   const state = React.useState(); //using react before hooks
  //   const [state, setstate] = useState(initialState)

  //   const [currentvalue , function ] = useState(initial value)
  const [count, setCount] = useState(900);

  //   const Incr ;

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default Index;
