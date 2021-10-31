import { useState } from "react";
import randomWords from 'random-words';
import './App.css';
import useKeyPress from "./hooks/useKeyPress";

const NUMBER_OF_WORDS = 50;

let words = Array(NUMBER_OF_WORDS).fill(null).map(e => randomWords()).join(' ');

function App() {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useKeyPress(key => {
    if(key === words[currentCharIndex]) {
      setCurrentCharIndex(currentCharIndex + 1);
    }
  })

  return (
    <div className="App">
      <div className="container mt-4">
        <p>
          {
            words.split('').slice(0, currentCharIndex).map( ( word, idx ) => (
              <span key={idx} className="Character-out">{word}</span>
            ))
          }
          <span className="Character-current">{words[currentCharIndex]}</span>
          {
            words.split('').slice(currentCharIndex + 1).map( ( word, idx ) => (
              <span key={idx} className="Character-in">{word}</span>
            ))
          }
        </p>
      </div>
    </div>
  );
}

export default App;
