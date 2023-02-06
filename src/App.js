import logo from "./logo.svg";
import "./App.css";
import Search from "./Search.js";

function App() {
  function searchWord(event) {
    alert("searching");
  }

  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
