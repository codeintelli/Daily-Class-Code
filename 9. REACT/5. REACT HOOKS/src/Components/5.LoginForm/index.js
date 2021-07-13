import React, { useState } from "react";

const Index = () => {
  // getter
  const [fname, getName] = useState("");
  const [lastname, getLastName] = useState(""); // array and object
  const [surname, getSurName] = useState("");

  // setter
  const [fullname, setName] = useState("");
  const [lastnameNew, setLastName] = useState("");
  const [surnameNew, setSurName] = useState("");

  const dataClick = (event) => {
    event.preventDefault();
    // kya save karva nu che (kai vaste save karva ni 6)
    setName(fname);
    setLastName(lastname);
    setSurName(surname);
  };

  const dataChanged = (e) => {
    console.log(e.target.value);
    getName(e.target.value);
  };

  const dataChangedTwo = (e) => {
    console.log(e.target.value);
    getLastName(e.target.value);
  };
  const dataChangedThree = (e) => {
    console.log(e.target.value);
    getSurName(e.target.value);
  };

  return (
    <>
      <div>
        <h1>
          Hello! {fullname} {lastnameNew} {surnameNew}
        </h1>
        <form onSubmit={dataClick}>
          <input
            type='text'
            placeholder='Enter Your Name'
            onChange={dataChanged}
            value={fname}
            name={fname}
          />
          <br />
          <input
            type='text'
            placeholder='Enter Your Last Name'
            onChange={dataChangedTwo}
            value={lastname}
            name={lastname}
          />
          <br />
          <input
            type='text'
            placeholder='Enter Your Middle Name'
            onChange={dataChangedThree}
            value={surname}
            name={surname}
          />
          <br />
          <button type='submit'>Save 🤝</button>
        </form>
      </div>
    </>
  );
};

export default Index;
