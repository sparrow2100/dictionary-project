import React from "react";
import Synonyms from "./Synonyms.js";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <div className="heading">
          <h2>{props.results.word}</h2>
        </div>

        <div className="infoOne">
          <h3>{props.results.meanings[0].partOfSpeech}</h3>
          <div className="phonetics">
            <p className="pronunciation">{props.results.phonetic}</p>
            <a
              href={
                props.results.phonetics.find((p) => p.audio.length > 0).audio
              }
              target="_blank"
              rel="noreferrer"
            >
              🎧
            </a>
          </div>

          <p>{props.results.meanings[0].definitions[0].definition}</p>
        </div>
        <Synonyms synonyms={props.results.meanings[0].synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
