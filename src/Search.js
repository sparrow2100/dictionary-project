import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  function getKeyword(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <form>
        <input
          className="search"
          type="search"
          placeholder="search for a word..."
          onChange={getKeyword}
        ></input>
      </form>
    </div>
  );
}
