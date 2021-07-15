import React from "react";
import { FcCustomerSupport } from "react-icons/fc";
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
    certificate: "",
  });
  const dataClick = (e) => {
    e.preventDefault();
    alert("data added to server");
  };
  const dataChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((preValue) => {
      return {
        ...preValue,
        // if(name === "sem"){sem : value}  =>[name]:value
        [name]: value,
      };
    });
  };
  return (
    <>
      <div>
        <p></p>
        <p>
          <FcCustomerSupport />
          {data.fname},{data.username},{data.email},{data.mob},{data.address},
          {data.degree},{data.erno},{data.sem}
        </p>
        <form onSubmit={dataClick}>
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
          <input
            type='text'
            placeholder='Enter Your Certificate Details'
            onChange={dataChanged}
            value={data.certificate}
            name='certificate'
          />
          <br />
          <button type='submit'>Login 🤝</button>
        </form>
      </div>
    </>
  );
};

export default Index;
