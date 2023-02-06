import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.meanings[0].partOfSpeech}</h3>
        <p>{props.results.phonetic}</p>
        <p>{props.results.meanings[0].definitions[0].definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
