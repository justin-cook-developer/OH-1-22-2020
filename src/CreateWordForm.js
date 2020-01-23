import React, { useState } from "react";

import "./CreateWordForm.css";

const CreateWordForm = ({ addWord }) => {
  const [word, setWord] = useState("");

  return (
    <form
      style={{
        margin: "2% auto",
      }}
      onSubmit={(ev) => {
        ev.preventDefault();
        addWord(word);
        setWord("");
      }}
    >
      <div className="center form-elem-container">
        <input value={word} onChange={(ev) => setWord(ev.target.value)} />
      </div>
      <div className="center form-elem-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CreateWordForm;
