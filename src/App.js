import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <form>
        <input
          className="search"
          type="search"
          placeholder="search for a word..."
        ></input>
      </form>
    </div>
  );
}

export default App;
