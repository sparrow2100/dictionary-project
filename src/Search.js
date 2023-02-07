import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [pictures, setPictures] = useState(null);

  function getKeyword(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  function handleResponse(response) {
    let wordObject = response.data[0];
    setResults(wordObject);
  }

  function handlePexelsResponse(response) {
    let photos = response.data.photos;
    setPictures(photos);
  }

  function getUrl(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    const pexelsApiKey =
      "A1vARA0DM1KirgNelzxxU4L0qVl3z9HEJxv2nq7eE7y0WXf8uWh5K3On";

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <Photos pictures={pictures} />
    </div>
  );
}
