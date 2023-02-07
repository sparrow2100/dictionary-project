import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function getKeyword(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  function handleResponse(response) {
    let wordObject = response.data[0];
    setResults(wordObject);
  }

  function getUrl(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Dictionary</h1>
        <form onSubmit={getUrl}>
          <input
            className="search"
            type="search"
            placeholder="search for a word..."
            onChange={getKeyword}
          ></input>
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
