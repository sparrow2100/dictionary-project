import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function getKeyword(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function getUrl(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <form onSubmit={getUrl}>
        <input
          className="search"
          type="search"
          placeholder="search for a word..."
          onChange={getKeyword}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
