import React from "react";

const Index = () => {
  /* 
  a = 10;
  a++;
  const [currentvalue,function] = React.useState(intialvalue)
  currentvalue = 10 = 11 after intial value this will become 11
  function = a++ = 11
  initialvalue=10 = 11after function this will become 11 and passed to currentvalue
  
  *initial value and current value will always be same 
  */
  // const [currentvalue,function] = React.useState(intialvalue)
  /* 
  currentValue = fullname, =>{initialValue Element}
  function = setFullname,
  intialvalue = {
    fname: "",
    lname: "",
    email: "",
  }
  
  */
  const [fullname, setFullname] = React.useState({
    fname: "",
    lname: "",
    email: "",
  });

  const dataClick = (e) => {
    e.preventDefault();
    alert("data saved successfully");
  };
  const dataChanged = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
    // prevalue = previous value
    setFullname((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
        };
      }
    });
  };

  return (
    <>
      <div>
        <h1>
          Hello! {fullname.fname} {fullname.lname}
        </h1>
        <p>{fullname.email}</p>
        <form onSubmit={dataClick}>
          <input
            type='text'
            placeholder='Enter Your Name'
            onChange={dataChanged}
            value={fullname.fname}
            name='fname'
          />
          <br />
          <input
            type='text'
            placeholder='Enter Your Last Name'
            onChange={dataChanged}
            value={fullname.lname}
            name='lname'
          />
          <br />
          <input
            type='text'
            placeholder='Enter Your Email Here'
            onChange={dataChanged}
            value={fullname.email}
            name='email'
          />
          <br />
          <button type='submit'>Login 🤝</button>
        </form>
      </div>
    </>
  );
};

export default Index;
