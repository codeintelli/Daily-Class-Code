import React from "react";

const Hooks = () => {
  let newTime = new Date().toLocaleTimeString();
  //   const [currentvalue , function ] = useState(initial value)
  const [ctime, uptime] = React.useState(newTime);
  const RefTime = () => {
    newTime = new Date().toLocaleTimeString();
    uptime(newTime);
  };
  return (
    <>
      <p>{ctime}</p>
      <button onClick={RefTime}>Get Time </button>
    </>
  );
};

export default Hooks;
