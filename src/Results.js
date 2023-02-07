import React from "react";
import Synonyms from "./Synonyms.js";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.meanings[0].partOfSpeech}</h3>
        <div className="phonetics">
          <p>{props.results.phonetic}</p>
          <a
            href={props.results.phonetics[0].audio}
            target="_blank"
            rel="noreferrer"
          >
            🎧
          </a>
        </div>

        <p>{props.results.meanings[0].definitions[0].definition}</p>
        <Synonyms synonyms={props.results.meanings[0].synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
