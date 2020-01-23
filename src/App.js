import React, { useState } from "react";
import inflection from "inflection";

import CreateWordForm, { secret } from "./CreateWordForm";

import "./App.css";

// {
//   word: '',
//   singular: '',
//   plural: ''
// }

// how to remove a word: wordElement === word

function App() {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    setWords([
      ...words,
      {
        word,
        singular: inflection.singularize(word),
        plural: inflection.pluralize(word),
      },
    ]);
  };

  return (
    <div style={{ width: "80%" }} className="center">
      <CreateWordForm addWord={addWord} />

      <div className="words-container">
        {words.map((word, i) => {
          return (
            <div key={i} style={{ margin: "auto 3%" }}>
              <p>singular: {word.singular}</p>
              <p>plural: {word.plural}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
