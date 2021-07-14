import React, { useState } from "react";
// import "./Google.css";
import Header from "./Header";
import CreateComponent from "./CreateComponent";
import Notes from "./Notes";
import Footer from "./Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("Data Added Successfully");
    setAddItem((predata) => {
      return [...predata, note];
    });
  };

  const onDelete = (id) => {
    console.log(id);
    setAddItem((olddata) =>
      olddata.filter((cur, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateComponent passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
