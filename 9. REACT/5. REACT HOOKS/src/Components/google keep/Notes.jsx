import React from "react";

// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const App = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className='note'>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className='btn' onClick={deleteNote}>
          {/* <DeleteOutlineIcon className='deleteIcon' /> */}
        </button>
      </div>
    </>
  );
};

export default App;
