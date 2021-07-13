import React from "react";

const App = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>copyright &copy; ITVMH {year}</footer>
    </>
  );
};

export default App;
