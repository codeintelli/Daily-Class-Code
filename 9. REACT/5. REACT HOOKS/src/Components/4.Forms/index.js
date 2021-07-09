import React from "react";

const Index = () => {
  // const name = "Nimisha";

  // getter
  const [name, getName] = React.useState("");

  // setter
  const [fullName, setName] = React.useState("");
  const dataChanged = (e) => {
    getName(e.target.value);
  };
  const dataClick = () => {
    setName(name);
  };
  return (
    <>
      <div>
        <h1>Hello! {fullName}</h1>
        <input
          type='text'
          placeholder='Enter Your Name'
          onChange={dataChanged}
        />
        <button onClick={dataClick}>Save 🤝</button>
      </div>
    </>
  );
};

export default Index;
