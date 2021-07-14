import React from "react";

// RegisterChallange

// implement this step to learn hooks
/* 
1. how to create object in hooks
2. how to call that object that we created before
3. learn how to call object data in JSX
4. create same Inputevent of all textbox 
5. if you are using controlled form then you must have value element it and that value element value is object variable
6. write logic in the event listner

*/

const Index = () => {
  const [data, setData] = React.useState({
    fname: "",
    username: "",
    email: "",
    mob: "",
    address: "",
    degree: "",
    erno: "",
    sem: "",
  });
  const dataClick = (e) => {
    e.preventDefault();
    alert("data added to server");
  };
  const dataChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          username: preValue.username,
          email: preValue.email,
          mob: preValue.mob,
          address: preValue.address,
          degree: preValue.degree,
          erno: preValue.erno,
          sem: preValue.sem,
        };
      } else if (name === "username") {
        return {
          fname: preValue.fname,
          username: value,
          email: preValue.email,
          mob: preValue.mob,
          address: preValue.address,
          degree: preValue.degree,
          erno: preValue.erno,
          sem: preValue.sem,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: value,
          mob: preValue.mob,
          address: preValue.address,
          degree: preValue.degree,
          erno: preValue.erno,
          sem: preValue.sem,
        };
      } else if (name === "mob") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: preValue.email,
          mob: value,
          address: preValue.address,
          degree: preValue.degree,
          erno: preValue.erno,

          sem: preValue.sem,
        };
      } else if (name === "address") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: preValue.email,
          mob: preValue.mob,
          address: value,
          degree: preValue.degree,
          erno: preValue.erno,
          sem: preValue.sem,
        };
      } else if (name === "degree") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: preValue.email,
          mob: preValue.mob,
          address: preValue.address,
          degree: value,
          erno: preValue.erno,
          sem: preValue.sem,
        };
      } else if (name === "erno") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: preValue.email,
          mob: preValue.mob,
          address: preValue.address,
          degree: preValue.degree,
          erno: value,
          sem: preValue.sem,
        };
      } else if (name === "sem") {
        return {
          fname: preValue.fname,
          username: preValue.username,
          email: preValue.email,
          mob: preValue.mob,
          address: preValue.address,
          degree: preValue.degree,
          erno: preValue.erno,
          sem: value,
        };
      }
    });
  };
  return (
    <>
      <div>
        <p></p>
        <p>
          {data.fname},{data.username},{data.email},{data.mob},{data.address},
          {data.degree},{data.erno},{data.sem}
        </p>
        <f orm onSubmit={dataClick}>
          <input
            type='text'
            placeholder='Enter Your Name'
            onChange={dataChanged}
            value={data.fname}
            name='fname'
          />

          <br />

          <input
            type='text'
            placeholder='Enter Your username'
            onChange={dataChanged}
            value={data.username}
            name='username'
          />

          <br />

          <input
            type='text'
            placeholder='Enter Your email'
            onChange={dataChanged}
            value={data.email}
            name='email'
          />

          <input
            type='text'
            placeholder='Enter Your mob'
            onChange={dataChanged}
            value={data.mob}
            name='mob'
          />

          <input
            type='text'
            placeholder='Enter Your address Here'
            onChange={dataChanged}
            value={data.address}
            name='address'
          />

          <input
            type='text'
            placeholder='Enter Your degree Here'
            onChange={dataChanged}
            value={data.degree}
            name='degree'
          />

          <input
            type='text'
            placeholder='Enter Your erno Here'
            onChange={dataChanged}
            value={data.erno}
            name='erno'
          />

          <input
            type='text'
            placeholder='Enter Your sem Here'
            onChange={dataChanged}
            value={data.sem}
            name='sem'
          />
          <br />
          <button type='submit'>Login 🤝</button>
        </f>
      </div>
    </>
  );
};

export default Index;
