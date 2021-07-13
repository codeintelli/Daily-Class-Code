import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
const App = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    let { name, value } = e.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const addEvent = (e) => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const Normal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className='main_note' onDoubleClick={Normal}>
        {expand ? (
          <input
            type='text'
            name='title'
            placeholder='Title'
            onChange={InputEvent}
            value={note.title}
          />
        ) : null}

        <textarea
          placeholder='Write A Note...'
          rows=''
          name='content'
          column=''
          onChange={InputEvent}
          value={note.content}
          onClick={expandIt}></textarea>

        {expand ? (
          <button onClick={addEvent}>
            {/* <AddIcon className="plus_sign" /> */}
            Add
          </button>
        ) : null}
      </div>
    </>
  );
};

export default App;
