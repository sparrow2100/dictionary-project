import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <h3>synonyms:</h3>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
